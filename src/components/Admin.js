import React, { Component } from "react";
import AjouterRecette from "./AjouterRecette";
import AdminForm from "./AdminForm";
import firebase from "firebase/app";
import 'firebase/auth'
import base, {firebaseApp} from '../base'
import Login from "./Login";

class Admin extends Component{
    state = {
        uid: null,
        chef: null
    }

    authenticate = () =>{
       const authProvider = new firebase.auth.FacebookAuthProvider()
       firebaseApp.auth().signInWithPopup(authProvider).then(this.handleAuth)
    }
    handleAuth = async authData => {
        const box = await base.fetch(this.props.pseudo,{context: this})
        if(!box.chef){
            await base.post(`${this.props.speudo}/chef`,{
                data: authData.user.uid
            })
        }
        this.setState({
            uid: authData.user.uid,
            chef:box.chef || authData.user.uid
        })
    }
    logout = async () =>{
        await firebase.auth().signOut()
        this.setState({uid:null})
    }
    render () {
        //const {recettes, ajouterRecette, majRecette, chargerExemple} = this.props
        if(!this.state.uid){
           return <Login authenticate={this.authenticate} />
        }
        
        if(!this.state.uid !== this.state.chef){
            return (
                <div>
                    <p>Tu n'es pas le chef de cette boite!</p>
                    {logout}
                </div>
            )
        }
        const logout = <button onClick={this.logout}>Déconnexion</button>
        return(
            <div className="cards">
                <AjouterRecette ajouterRecette={this.props.ajouterRecette}/>
                {
                  Object.keys(this.props.recette).map(key => <AdminForm 
                  key={key}
                  id={key}
                  majRecette={this.props.majRecette}
                  recettes={this.props.recette}
                  supprimerRecette={this.props.supprimerRecette}/> )
                }
            <footer>
                {logout}
                <button onClick={this.props.chargerExemple}>Remplir</button>
            </footer>
            </div>
        )
    }
}

export default Admin