import React, { useState } from 'react'

// submitPost function comes in as a prop
const PostForm = ({ submitPost, editPost, post, edit }) => {


  // tracking the state of post form data
  // ternerary used to pre-poulate the form when editing a post
const [title, setTitle] = useState(edit ? post[0].title : '')
const [continent, setContinent] = useState(edit ? post[0].category : '')
const [postContent, setPostContent] = useState(edit ? post[0].content : '')

// call submitForm function when form is submitted
// will call submitPost function passing in formdata
function submitForm(event) {
  event.preventDefault()
  submitPost(title, continent, postContent)
}

function submitEditForm(event) {
  event.preventDefault()
  editPost(post, title, continent, postContent)
  // console.log('editing post', post[0]._id, title, continent, postContent)
}
  // render form with post inputs
  return (
    <>
      <form onSubmit={edit ? submitEditForm : submitForm} className="p-5 bg-light rounded-3 border border-success">
        <div className="row mb-3">
          <label for="inputPostTitle" className="col-sm-2 col-form-label">Post Title</label>
          <div className="col-sm-10">
            <input 
              required 
              maxLength="50" 
              type="text" 
              value={title} 
              onChange={(event) => setTitle(event.target.value)} 
              className="form-control" 
              id="title">
            </input>
          </div>
        </div>
        <div className="row mb-3">
          <label for="input-continent-select" className="col-sm-2 col-form-label">Choose a Continent</label>
          <div className="col-sm-10">
            <select 
              required 
              className="form-select" 
              value={continent} 
              onChange={(event) => setContinent(event.target.value)} 
              id="inputPostContinent">
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
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Tell us your story</legend>
          <div className="col-sm-10">
            <textarea 
              required 
              maxLength="10000" 
              className="form-control" 
              rows="15" 
              value={postContent} 
              onChange={(event) => setPostContent(event.target.value)}>
            </textarea>
          </div>
        </fieldset>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0"></legend>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default PostForm