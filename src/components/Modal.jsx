import React, { useState } from 'react'

const Modal = ({ comment, modalNumber }) => {

const [editedComment, setEditedComment] = useState(comment.content)

  // delete button function calls deletePost async passing in the current post as the argument
  function editCommentModal() {
    editComment(editedComment, post)
  }

  return (
    <>
      {/* <button type="button" className="btn btn-success my-2 me-1" data-toggle="modal" data-target={`modal${key}`}>
              Edit Comment
      </button> */}
      <div className="modal fade" id={`modal${modalNumber}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit your comment</h5>
              <button type="button" className="close btn btn-success" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <textarea required maxLength="1000" value={editedComment} onChange={(event) => setEditedComment(event.target.value)}>

            </textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success my-2 me-1" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success my-2 me-1">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal