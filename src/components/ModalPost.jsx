import React, { useState } from 'react'

const Modal = ({ modalNumber, post, editPost }) => {

  // track state for post details. Initial state is existing post data
  const [title, setTitle] = useState(post[0].title)
  const [continent, setContinent] = useState(post[0].category)
  const [postContent, setPostContent] = useState(post[0].content)

  // delete button function calls deletePost async passing in the current post as the argument
  function editPostModal() {
    editPost(post, title, continent, postContent)
  }

  // display modal for editing a post
  return (
    <>
      <div className="modal fade" data-keyboard="false" data-backdrop="static" id={`modal${modalNumber}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-3">
            <div className="modal-header p-0 py-3">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit your Post</h5>
              {/* close modal without saving changes */}
              <button type="button" className="close btn btn-success" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Title</label>
                <input required maxLength="50" type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control" id="title"></input>
              </div>
              <label for="inputPostContinent" class="col-form-label">Continent</label>
              <div class="form-group">
                <select required className="form-select" value={continent} onChange={(event) => setContinent(event.target.value)} id="inputPostContinent">
                  <option selected></option>
                  <option value="Asia">Asia</option>
                  <option value="Africa">Africa</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Europe">Europe</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Post</label>
                <textarea required maxLength="10000" className="form-control" rows="15" value={postContent} onChange={(event) => setPostContent(event.target.value)}></textarea>
              </div>
            </div>
            <div className="modal-footer p-0 py-3">
              {/* save changed by calling editPostModal and close modal */}
              <button type="button" onClick={() => {editPostModal()}} className="btn btn-success" data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal