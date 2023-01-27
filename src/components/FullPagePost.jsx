import React, { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import PostContent from './PostContent'
import CommentContent from './CommentContent'
import CommentForm from './CommentForm';

// props for conditional rendering, the post object passed from the preview card that is clicked
// submitComment posts the comment to the database
const FullPagePost = ({ forumMember, post, submitComment }) => {

  // map over post to pull comments from the nested array and create a new comments object to be used
  // when rendering CommentContent component
  const comments = post[0].comments.map(comment => (
      { username: comment.author.username, date: comment.date_posted.substring(0, 10), content: comment.content}
  ))
  
  // used to try make the window load at the top - React remembers the old screen postion because SPA dont refresh
  useEffect(() => {
    // window.scroll(0, 0)
  }, [])

  return (
    <>
      <div className="container min-vh-100">
        <PostContent post={post} />
        {comments.length > 0 ? <h3 className="ps-5 my-3">Comments</h3> : ''}
        {/* if there are comments map over them and render CommentContent component for each comment */}
        {comments.length > 0
          ? comments.map((comment, idx) => (
              <CommentContent key={idx} comment={comment}/>
            ))
            : <Header
                headingText={'Much empty...'}
                bodyText={
                  forumMember
                  ? 'This post has no comments yet. Comment below to be the first'
                  : 'This post has no comments yet.'
                }
              />
        }
        <h3 className="ps-5 my-3">Post a Comment</h3>
        {forumMember
          ? <CommentForm post={post} submitComment={submitComment} />
          : <Header
              bodyText={'Only Members can comment on a post. Register or login to comment on a post.'}
              showBtn1 
              btn1Text={"Register"}
              btn1ToPage={"/register"}
              showBtn2
              btn2Text={"Login"}
              btn2ToPage={"/login"}
            />
        }
      </div>
    </>
  )
}

export default FullPagePost
