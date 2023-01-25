import React, { ComponentDidMount } from 'react';
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import PostContent from './PostContent'
import CommentContent from './CommentContent'
import CommentForm from './CommentForm';


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

const FullPagePost = ({ forumMember, post, submitComment }) => {

  const comments = post[0].comments.map(comment => (
      { username: comment.author.username, date: comment.date_posted.substring(0, 10), content: comment.content}
  ))

  const commentsEmpty = false
  
  window.scroll(0, 0)

  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
        <div className="container">
          <PostContent post={post} />
          <h1 className="ps-5 my-3">Comments</h1>
          {comments.length > 0
            ? comments.map((comment, idx) => (
            <CommentContent key={idx} comment={comment}/>
            ))
            : forumMember
            // Will end up rendering the comment box here for members
            ? <Header headingText={"Much empty..."} 
              bodyText={"This post currently has no comments. Click below to be the first"} 
              showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/create"} />
            : <Header headingText={"Much empty..."} 
            bodyText={"This post currently has no comments. Register today to be the first to comment."}
              showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />
          }
          <CommentForm post={post} submitComment={submitComment} />
        </div>
        <Footer />
    </>
  )
}

export default FullPagePost





