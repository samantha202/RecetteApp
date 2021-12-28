import React from "react";

const AdminForm = ({
  id: key,
  majRecette,
  recettes,
  supprimerRecette
}) => {
    const recette = recettes[key]
    const handleChange = (event, key) => {
      const {name, value} = event.target
      const recette = recettes[key]
      recette[name] = value
      majRecette(key, recette)
    }

    return(
        <div className='card'>
            <form className='admin-form'>
             <input name='nom' value={recette.nom} onChange={e => handleChange(e,key)}  type='text' placeholder="nom de la recette"/>
             <input name='image' value={recette.image} onChange={e => handleChange(e,key)} type='text' placeholder={'Nom de l\'image'}/>
             <textarea  name='ingredients' onChange={e => handleChange(e,key)} value={recette.ingredients}  rows='3' placeholder='liste des ingredients'/>
             <textarea name='instructions' onChange={e => handleChange(e,key)} value={recette.instructions} rows='15' placeholder='liste des instructions'/>
            </form>
            <button onClick={() => supprimerRecette(key)}>supprimer</button>
        </div>
    )
}

export default AdminForm