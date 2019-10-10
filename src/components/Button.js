import React, { Component } from 'react'

class Button extends Component{
  render(){
    const styles = ['btn', 'my-2', 'my-sm-0']
    if(this.props.className) styles.push('btn-outline-success')
    const className = styles.join(' ')

    return(
      <button
        className={ className }
        type={ this.props.type }
      >
        { this.props.text }
      </button>
    )
  }
}


export default Button
