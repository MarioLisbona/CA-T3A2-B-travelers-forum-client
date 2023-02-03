import React, { useState } from 'react'
import ModalConfirmDelete from './ModalConfirmDelete'
import ModalPost from './ModalPost'
import moment from 'moment'


const PostContent = ({ post, postOwner, deletePost, editPost, loggedInMember }) => {

  const [rating, setRating] = useState(0)
  const [ratingScore, setRatingScore] = useState(0)

  console.log(post)
  console.log(rating)

  // delete button function calls deletePost async passing in the current post as the argument
  function deleteButton() {
    deletePost(post)
  }
  // render post content
  return (
    <div className="p-5 pb-1 mt-5 mb-3 bg-light rounded-3 border border-success">
				<h1 className="mb-3">{post[0].title}</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <div className="">Member:</div>
              </div>
              <div className="col-md-6">
                <div className="bg-alt mb-2">{post[0].author.username}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="">Continent:</div>
              </div>
              <div className="col-md-6">
                <div className="bg-alt mb-2">{post[0].category}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="">Posted:</div>
              </div>
              <div className="col-md-6">
                <div className="bg-alt mb-2">{moment(post[0].date_posted).format('MMM Do YYYY hh:mm:a')}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="">Rating:</div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="bg-alt mb-2">Post average rating</div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="col-md-12">
              <div style={{ whiteSpace: "pre-wrap" }} className="bg-alt">{post[0].content}</div>
          </div>
        </div>
        <hr></hr>
        {/* If the logged in user is the author of the post
        render 2 buttons
        Edit - to edit a post. the edit button is targeting a modal with id #modal${post[0]._id}
        Delete Button to call the deleteButton function which calls deletePost in App.jsx */}
        {postOwner
          ? <span>
              <button 
                type="button" 
                className="btn btn-success my-2 me-1" 
                data-toggle="modal" 
                data-target={`#modal${post[0]._id}`}>
                Edit Post
              </button>
              <ModalPost 
                post={post} 
                modalNumber={post[0]._id} 
                editPost={editPost} 
              />
              <button 
                type="button" 
                className="btn btn-success my-2 me-1" 
                data-toggle="modal" 
                data-target={"#ModalDeletePost"}>Delete Post
              </button>
              <ModalConfirmDelete type={'Post'} delConfirmed={deleteButton} />
            </span>
          : ''
        }
        {loggedInMember && !postOwner
          ? 
          <div class="btn-group">
              <button type="button" class="btn btn-success my-2">Rate This Post</button>
              <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split my-2 " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu  bg-light rounded-3 border border-success">
                <a class="dropdown-item"><button type="button" value={1} onClick={event => setRating(event.target.value)} className="btn m-0">★</button></a>
                <a class="dropdown-item"><button type="button" value={2} onClick={event => setRating(event.target.value)} className="btn m-0">★★</button></a>
                <a class="dropdown-item"><button type="button" value={3} onClick={event => setRating(event.target.value)} className="btn m-0">★★★</button></a>
                <a class="dropdown-item"><button type="button" value={4} onClick={event => setRating(event.target.value)} className="btn m-0">★★★★</button></a>
                <a class="dropdown-item"><button type="button" value={5} onClick={event => setRating(event.target.value)} className="btn m-0">★★★★★</button></a>
                {/* <a class="dropdown-item" href="#">★★</a>
                <a class="dropdown-item" href="#">★★★</a>
                <a class="dropdown-item" href="#">★★★★</a>
                <a class="dropdown-item" href="#">★★★★★</a> */}
              </div>
            </div>
          : ''
        }
    </div>
  )
}

export default PostContent