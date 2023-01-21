import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import PostContent from './PostContent'
import CommentContent from './CommentContent'

const FullPagePost = ({ forumMember }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      {/* <HeroImage heroClass={'antarctica'}/> */}
        <div className="container">
          {/* <Header headingText={"Post Title"} /> */}
          <PostContent />
          <h1 class="mb-3">Comments</h1>
          <CommentContent />
          <CommentContent />
          <CommentContent />
          <CommentContent />
          <CommentContent />
          <CommentContent />
          <CommentContent />
        </div>
        <Footer />
    </>
  )
}

export default FullPagePost





