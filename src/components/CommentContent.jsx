import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

const CommentContent = ({ comment, loggedInMember, post, commentOwner, deleteComment, modalNumber }) => {


  // delete button function calls deletePost async passing in the current post as the argument
  function deleteButton() {
    deleteComment(comment, post)
  }
  
  return (
    <div className="ps-5 pb-1 py-2 my-2 bg-light rounded-3 border border-success">
        <div className="row">
            <div className="col-md-4">
                <div>
                  <div className="row">
                    <div className="col-md-4">
                      <div>Member:</div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-alt mb-2">{comment.username}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-4">
                      <div>Posted:</div>
                    </div>
                    <div className="col-md-7 mb-4">
                      <div className="bg-alt mb-2">{comment.date}</div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="bg-alt">{comment.content}</div>
            </div>
        </div>
        <hr></hr>
        {commentOwner
        ? <span>
            {/* <Link to={`/posts/edit/${post[0]._id}`}><button type="button" className="btn btn-success my-2 me-1">Edit Comment</button></Link> */}
            <button type="button" className="btn btn-success my-2 me-1" data-toggle="modal" data-target={`#modal${modalNumber}`}>
              Edit Comment
            </button>
            <Modal comment={comment} post={post} modalNumber={modalNumber} />
            <Link to="/" onClick={() => {deleteButton()}} ><button type="button" className="btn btn-success my-2">Delete Comment</button></Link>
          </span>
          : ''
        }
    </div>
  )
}

export default CommentContent