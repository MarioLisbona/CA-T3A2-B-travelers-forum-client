import React, { useEffect } from 'react';
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
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
  
  useEffect(() => {
    // window.scroll(0, 0)
  }, [])


  return (
    <>
      <div className="container min-vh-100">
        <PostContent post={post} />
        <h3 className="ps-5 my-3">Comments</h3>
        {comments.length > 0
          ? comments.map((comment, idx) => (
              <CommentContent key={idx} comment={comment}/>
            ))
          : <Header headingText={"Much empty..."}
              bodyText={
                forumMember
                  ? "This post currently has no comments. Comment Below below to be the first"
                  : "This post currently has no comments. Register today to be the first to comment."
              }
              btn1Text={
                forumMember
                  ? ""
                  : "Register"
              }
              showBtn1={
                forumMember
                  ? false
                  : true
              }
              btn1ToPage={
                forumMember
                ? "/posts/create"
                : "/register" }
            />
        }
        {comments.length > 0 ? <h3 className="ps-5 my-3">Post a Comment</h3> : ''}
        {forumMember
          ? <CommentForm post={post} submitComment={submitComment} />

          : comments.length == 0 
            ? ''
            : <Header
                bodyText={'Only Members can comment on a post. Register today to become a member or sign in'}
                showBtn1 
                btn1Text={"Register"}
                btn1ToPage={"/register"}
                showBtn2
                btn2Text={"Login"}
                btn2ToPage={"/login"}
              />
        }
      </div>
      <Footer />
    </>
  )
}

export default FullPagePost
