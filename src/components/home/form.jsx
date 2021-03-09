import React from 'react'

export default function Form(props) {
    return (
        <div>
              <input 
              type="text" 
              placeholder="Votre Nom" 
              onChange={props.handleChange} 
              name="nom"
          />
          <input 
              type="text" 
              placeholder="Votre Prenom" 
              onChange={props.handleChange} 
              name="pren"
          />
          <input 
          type="text" 
          placeholder="Votre Email" 
          onChange={props.handleChange} 
          name="email"
      />
        </div>
    )
}
