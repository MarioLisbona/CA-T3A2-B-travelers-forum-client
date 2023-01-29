import React from 'react'
import { Link } from 'react-router-dom'

const PostContent = ({ post, postOwner, deletePost }) => {

  // delete button function calls deletePost async passing in the current post as the argument
  function deleteButton() {
    deletePost(post)
  }

  return (
    <div className="p-5 pb-1 mt-5 mb-3 bg-light rounded-3 border border-success">
				<h1 className="mb-3">{post[0].title}</h1>
        <div className="row">
            <div className="col-md-6">
                <div className="">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="">Member:</div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-alt mb-2">{post[0].author.username}</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="">Posted:</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="bg-alt mb-2">{post[0].date_posted.substring(0, 10)}</div>
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
        {postOwner
        ? <span>
            <Link to={`/posts/edit/${post[0]._id}`}><button type="button" class="btn btn-success my-2 me-1">Edit Post</button></Link>
            <Link to="/" onClick={() => {deleteButton()}} ><button type="button" class="btn btn-success my-2">Delete Post</button></Link>
          </span>
          : ''
        }
    </div>
  )
}

export default PostContent