import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PostForm from './PostForm'

const CreateAPost = ({ submitPost }) => {

  return (
    <>
      <HeroImage heroClass={'create'} />
      <div className="container">
        <Header 
          headingText={"Create a post"}
          bodyText={"Tell us about an amazing story from your travels. Choose a continent and what experience you had."}
        />
        {/* render PostForm passing in the submitPost function */}
        <PostForm submitPost={submitPost}  />
      </div>
    </>
  )
}

export default CreateAPost