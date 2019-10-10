import React from 'react'

function FormInputLabel(props) {
  return(
    <div className='form-group col-6'>
      <label
        for={ props.id}
      >{ props.title }</label>
      <input
        className='form-control mr-sm-2'
        type= { props.type}
        placeholder= { props.title }
        aria-label= { props.arialabel }
      />
    </div>
  )
}

export default FormInputLabel
