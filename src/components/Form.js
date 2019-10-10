import React, { Component } from 'react'
import FormInputLabel from './FormInputLabel'
import FormTextArea from './FormTextArea'

class Form extends Component {
  render(){
    return(
      <main>
        <form>
            <FormInputLabel
                id="title"
                title="Inserta el titulo"
                type="text"
                ariaLabel="titulo post"
            />
            <FormInputLabel
                id="author"
                title="Inserta el nombre del autor"
                type="text"
                ariaLabel="titulo autor"
            />
            <FormInputLabel
                id="time"
                title="Inserta el tiempo de lectura"
                type="text"
                ariaLabel="tiempo lectura"
            />
            <FormInputLabel
                id="image"
                title="Inserta la imagen"
                type="text"
                ariaLabel="imagen"
            />
            <FormTextArea
              id="text-area"
              title="Inserta la descripcion"
            />
        </form>
      </main>
    )
  }

}

export default Form


