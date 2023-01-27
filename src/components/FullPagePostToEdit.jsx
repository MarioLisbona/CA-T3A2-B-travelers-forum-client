import React, { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import PostContent from './PostContent'
import CommentContent from './CommentContent'
import CommentForm from './CommentForm'
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

// props for conditional rendering, the post object passed from the preview card that is clicked
// submitComment posts the comment to the database
const FullPagePostToEdit = ({ post, editPost }) => {

  return (
    <>
      <div className="container min-vh-100">
        <Header headingText={"Edit your post"}/>
        <PostContent post={post}  />
        <PostForm edit editPost={editPost} post={post} />
      </div>
    </>
  )
}

export default FullPagePostToEdit
