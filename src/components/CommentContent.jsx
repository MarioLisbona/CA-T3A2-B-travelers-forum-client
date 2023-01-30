import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import ModalConfirmDelete from './ModalConfirmDelete'

const CommentContent = ({ comment, post, commentOwner, deleteComment, modalNumber, editComment }) => {


  // delete button function calls deleteComment async function passing in the current post and comment as the arguments
  function deleteButton() {
    deleteComment(comment, post)
  }
  
  return (
    // displaying comment contents
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
        {/* If the logged in user is the author of the comment
        render 2 buttons
        Edit - to edit a comment. Each edit button is targeting a modal with id #modal${modalNumber} using the key from previous mapping of CommentContent to edit the comment
        Delete Button to call the deleteButton function which calls deleteComment in App.jsx */}
        {commentOwner
          ? <span>
              <button type="button" className="btn btn-success my-2 me-1" data-toggle="modal" data-target={`#modal${modalNumber}`}>
                Edit Comment
              </button>
              <Modal 
                comment={comment} 
                post={post} 
                modalNumber={modalNumber} 
                editComment={editComment}
              />
              {/* <Link to="/" onClick={() => {deleteButton()}} >
                <button type="button" className="btn btn-success my-2">Delete Comment</button>
              </Link> */}
              <button type="button" className="btn btn-success my-2" data-toggle="modal" data-target={"#ModalDeleteComment"}>Delete Comment</button>
              <ModalConfirmDelete type={'Comment'} delConfirmed={deleteButton} />
            </span>
          : ''
        }
    </div>
  )
}

export default CommentContent