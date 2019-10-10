import React, { Component } from 'react'

class FormCheckbox extends Component {
  constructor(props){
    super(props)

    this.state = {
      active: false
    }
  }

  toggleCheckActive(){
    this.setState({ active: !this.state.active })
    // Setea el estado del check en cada click
  }


  render(){
    return(
      <div
        className="form-check"
      >
      <input
        className="form-check-input"
        type="checkbox"
        checked={this.state.active}
        // Se pone el estado inicial del check
        value=""
        id={ this.props.id }
        onClick= { this.toggleCheckActive.bind(this) }
      />
      { this.state.active && (
        <label
          className="form-check-label text-light"
          for={ this.props.id }>
            { this.props.label }
        </label>
      )}
    </div>
    // Se esta evaluando si el check esta activo se muestra el texto
    )
  }
}

export default FormCheckbox
