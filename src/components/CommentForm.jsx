import React, { useState } from 'react'

const CommentForm = ({ post, submitComment }) => {

  // tracking state of variables used in the comment form
  const [title] = useState(post[0].title)
  const [continent] = useState(post[0].category)
  const [comment, setComment] = useState('')

  // prevent default behaviour of the form
  // call submitComment , passing in form data to post the comment to the database
  function submitForm(event) {
    event.preventDefault()
    submitComment(post, comment)
  }

  return (
    <>
    <form onSubmit={submitForm} className="p-5 bg-light rounded-3 border border-success">
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Post Title</label>
        <div className="col-sm-10">
          <input type="text" value={title} className="form-control" id="title"></input>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Continent</label>
        <div className="col-sm-10">
          <input type="text" value={continent} className="form-control" id="continent"></input>
        </div>
      </div>
      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">Comment</legend>
        <div className="col-sm-10">
          <textarea value={comment} onChange={(event) => setComment(event.target.value)} className="form-control" rows="10" ></textarea>
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

export default CommentForm