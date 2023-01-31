import React from 'react'
import { Link } from 'react-router-dom'
import ModalConfirmDelete from './ModalConfirmDelete'
import ModalPost from './ModalPost'
import moment from 'moment'


const PostContent = ({ post, postOwner, deletePost, editPost }) => {

  const localDate = new Date(post[0].date_posted)
  console.log(post[0].date_posted)
  console.log(localDate)
  console.log(moment(localDate).format('MMM Do YYYY h:mm:a'))

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
          <div>
            <div className="row">
              <div className="col-md-4">
                <div className="">Posted:</div>
              </div>
              <div className="col-md-6 mb-4">
                {/* <div className="bg-alt mb-2">{post[0].date_posted.substring(0, 10)}</div> */}
                <div className="bg-alt mb-2">{`${moment(post[0].date_posted).format('MMM Do YYYY hh:mm:a')}`}</div>
              </div>
            </div>
            </div>
          </div>
          <hr></hr>
          <div className="col-md-12">
              <div className="bg-alt">{post[0].content}</div>
          </div>
        </div>
        <hr></hr>
        {/* If the logged in user is the author of the post
        render 2 buttons
        Edit - to edit a post. the edit button is targeting a modal with id #modal${post[0]._id}
        Delete Button to call the deleteButton function which calls deletePost in App.jsx */}
        {postOwner
          ? <span>
              <button type="button" className="btn btn-success my-2 me-1" data-toggle="modal" data-target={`#modal${post[0]._id}`}>
                Edit Post
              </button>
              <ModalPost post={post} modalNumber={post[0]._id} editPost={editPost} />
              {/* <Link to="/" onClick={() => {deleteButton()}} ><button type="button" className="btn btn-success my-2">Delete Post</button></Link> */}
              <button type="button" className="btn btn-success my-2" data-toggle="modal" data-target={"#ModalDeletePost"}>Delete Post</button>
              <ModalConfirmDelete type={'Post'} delConfirmed={deleteButton} />
            </span>
          : ''
        }
    </div>
  )
}

export default PostContent