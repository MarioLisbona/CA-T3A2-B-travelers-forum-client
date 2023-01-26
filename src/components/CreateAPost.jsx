import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'
import PostForm from './PostForm'

const CreateAPost = ({ submitPost }) => {

  return (
    <>
      <HeroImage heroClass={'create'} />
      <div className="container">
        <Header headingText={"Create a post"} />
        <PostForm submitPost={submitPost}  />
      </div>
    </>
  )
}

export default CreateAPost