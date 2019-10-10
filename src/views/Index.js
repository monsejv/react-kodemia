import React, { Component } from 'react'


import Navbar from '../components/Navbar'
import PostCardList from '../components/PostCardList'
import api from '../lib/api'

const posts = [{
  title: 'Hola preciosa',
  description: 'Monse',
  date: '20/09/19',
  image: 'https://media1.giphy.com/media/vY7khS0ScmZYQ/giphy.gif'
},
{
  title: 'Hola preciosa',
  description: 'Monse',
  date: '20/09/19',
  image: 'http://giphygifs.s3.amazonaws.com/media/fHgKZHDH1BHzi/200.gif'
},
{
  title: 'Hola preciosa',
  description: 'Monse',
  date: '20/09/19',
  image: 'https://media0.giphy.com/media/11TyfGbDbBv4be/giphy.gif'
}]

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    }
  }

  async componentDidMount(){
    try {
      const posts = await api.getPosts()
      this.setState({ posts})
    } catch (error) {
      this.setState({
        hasError: true,
        errorMessage: error.message
      })
    }

  }

  render(){
      return(
        <main>
          <Navbar />

          {
            !this.state.hasError ? (
              <PostCardList
                posts={this.state.posts}
              />
            ) : (
              <h1 className="title is-error">
                No se pudo conectar
              </h1>
            )
          }
        </main>

      )
  }
}

export default Index
