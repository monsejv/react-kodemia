import React, { Component } from 'react'

import NavBar from '../components/Navbar'
import Form from '../components/Form'

class NewPost extends Component{
  render(){
    return(
      <main>
        <NavBar />
        <Form />
      </main>
    )
  }
}

export default NewPost
