import React, { useState } from 'react'

const Modal = ({ comment, modalNumber, editComment, post }) => {

// track comment state - initial state is existing comment
const [editedComment, setEditedComment] = useState(comment.content)

  // delete button function calls deletePost async passing in the current post as the argument
  function editCommentModal() {
    editComment(comment, editedComment, post)
  }
  // display modal to edit comment
  // prepopulate with existing comment data
  return (
    <>
      <div className="modal fade" data-keyboard="false" data-backdrop="static" id={`modal${modalNumber}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-3">
            <div className="modal-header p-0 py-3">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit your comment</h5>
              {/* close modal without saving changes */}
              <button type="button" className="close btn btn-success" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-content">
            <textarea
              required 
              maxLength="1000" 
              rows="10" 
              cols="50" 
              value={editedComment} 
              onChange={(event) => setEditedComment(event.target.value)}>
            </textarea>
            </div>
            <div className="modal-footer p-0 py-3">
              {/* save changes by calling editCommentModal and close modal */}
              <button 
                type="button" 
                onClick={() => {editCommentModal()}} 
                className="btn btn-success" 
                data-dismiss="modal">Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal