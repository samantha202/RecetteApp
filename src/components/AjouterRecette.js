import React, { Component } from "react";

class AjouterRecette extends Component{
    state = {
        nom: '',
        image: '',
        ingredients:'',
        instructions: ''
    }
    handleChange = event => {
        const {name, value} = event.target
        const {nom,image} = this.state
        this.setState({[name]: value})
        console.log({nom,image})
    }
    render(){
        return(
            <div className='card'>
                <form className='admin-form ajouter-recette'>
                    <input  value={this.state.nom}  onChange={this.handleChange} name='nom' type='text' placeholder="nom de la recette"/>
                    <input value={this.state.image}  onChange={this.handleChange} name='image' type='text' placeholder={'Nom de l\'image'}/>
                    <textarea value={this.state.ingredients} onChange={this.handleChange}  name='ingredients' rows='3' placeholder='liste des ingredients'/>
                    <textarea  value={this.state.instructions} onChange={this.handleChange}  name='instructions' rows='15' placeholder='liste des instructions'/>
                </form>
            </div>
        )
    }
}

export default AjouterRecette