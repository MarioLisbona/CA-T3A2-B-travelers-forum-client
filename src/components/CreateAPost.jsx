import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import PostForm from './PostForm'

////////////////////////////////////////////////////////////////////////////////////////////////
// CreateAPost component
// Use - Displays a page with a form to create a new post
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, no CTA button
//       - PostForm component
//       - footer
////////////////////////////////////////////////////////////////////////////////////////////////

const CreateAPost = ({ forumMember, submitPost }) => {
  return (
    <>
      <HeroImage heroClass={'create'} />
      <div className="container">
        <Header headingText={"Create a post"} />
        <PostForm submitPost={submitPost}  />
      </div>
      <Footer />
    </>
  )
}

export default CreateAPost