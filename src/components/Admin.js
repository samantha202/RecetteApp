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
    handleAuth = authData => {
        console.log(authData)
    }
    render () {
        //const {recettes, ajouterRecette, majRecette, chargerExemple} = this.props
        if(!this.state.uid){
           return <Login authenticate={this.authenticate} />
        }
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
                <button onClick={this.props.chargerExemple}>Remplir</button>
            </footer>
            </div>
        )
    }
}

export default Admin