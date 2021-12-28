import React, { Component } from "react";
import AjouterRecette from "./AjouterRecette";
import AdminForm from "./AdminForm";

class Admin extends Component{
    render () {
        //const {recettes, ajouterRecette, majRecette, chargerExemple} = this.props
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