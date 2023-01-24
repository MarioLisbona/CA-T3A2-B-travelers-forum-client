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

  const comments = post[0].comments.map(comment => (
      { username: comment.author.username, content: comment.content}
  ))

  const commentsEmpty = false

  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
        <div className="container">
          <PostContent post={post} />
          <h1 className="mb-3">Comments</h1>
          {comments.length > 0
            ? comments.map((comment, idx) => (
            <CommentContent key={idx} comment={comment}/>
            ))
            : forumMember
            // Will end up rendering the comment box here for members
            ? <Header headingText={"Much empty..."} 
              bodyText={"The Australia travel forum currently has no posts, Click below to be the first"} 
              showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/create"} />
            : <Header headingText={"Much empty..."} 
            bodyText={"This post currently has no comments. Register today to be the first to comment."}
              showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />
          }

        </div>
        <Footer />
    </>
  )
}

export default FullPagePost





