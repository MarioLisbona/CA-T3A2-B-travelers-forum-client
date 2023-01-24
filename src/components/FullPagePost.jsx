import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import PostContent from './PostContent'
import CommentContent from './CommentContent'

////////////////////////////////////////////////////////////////////////////////////////////////
// FullPagePost component
// Use - Display's a full post, with comments 
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - PostContent component
//       - mapping over comments object and rendering CommentContent for each object
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

const FullPagePost = ({ forumMember, post }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
        <div className="container">
          {/* <Header headingText={"Post Title"} /> */}
          <PostContent post={post} />
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





