import React, { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import PostContent from './PostContent'
import CommentContent from './CommentContent'
import CommentForm from './CommentForm';

const FullPagePost = ({ forumMember, post, submitComment }) => {

  const comments = post[0].comments.map(comment => (
      { username: comment.author.username, date: comment.date_posted.substring(0, 10), content: comment.content}
  ))

  console.log(comments)
  
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
            : <Header
                bodyText={'Only Members can comment on a post. Register today to become a member or login'}
                showBtn1 
                btn1Text={"Register"}
                btn1ToPage={"/register"}
                showBtn2
                btn2Text={"Login"}
                btn2ToPage={"/login"}
              />
        }
        {comments.length > 0 ? <h3 className="ps-5 my-3">Post a Comment</h3> : ''}
        {forumMember
          ? <CommentForm post={post} submitComment={submitComment} />

          : comments.length == 0 
            ? ''
            : <Header
                bodyText={'Only Members can comment on a post. Register today to become a member or login'}
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
