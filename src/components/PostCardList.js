import React from 'react'

import PostCard from './PostCard'

function PostCardList(props) {
  const { posts } = props
  return(
    <section>
     { posts.map(post => {
       return (
         < PostCard
            title={ post.title }
            image={ post.image }
            description={ post.description }
            date={ post.date }
            key= { post.title }
         />
       )
     }) }
    </section>
  )
}

export default PostCardList
