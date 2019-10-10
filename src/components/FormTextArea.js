import React from 'react'

function FormTextArea(props) {
  return(
    <div className='form-group col-6'>
      <label
        for={ props.id}
      >{ props.title }</label>
      <textarea
        class="form-control"
        id={ props.id }
        rows="3">
      </textarea>
    </div>
  )
}

export default FormTextArea
