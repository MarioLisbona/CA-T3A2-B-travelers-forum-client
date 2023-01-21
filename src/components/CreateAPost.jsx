import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import PostForm from './PostForm'

const CreateAPost = ({ forumMember }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'create'} />
      <div className="container">
        <Header headingText={"Create a post"} />
        <PostForm />
      </div>
      <Footer />
    </>
  )
}

export default CreateAPost