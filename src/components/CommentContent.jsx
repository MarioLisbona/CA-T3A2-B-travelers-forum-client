import React from 'react'
import { Link } from 'react-router-dom'

const CommentContent = ({ comment, loggedInMember, post, commentOwner }) => {

  console.log(commentOwner)
  
  return (
    <div className="ps-5 py-2 my-2 bg-light rounded-3 border border-success">
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
        {commentOwner
        ? <span>
            <Link to={`/posts/edit/${post[0]._id}`} className="btn btn-success btn-lg my-3 text-black">
              Edit Comment
            </Link>
            <Link  to="/" className="btn btn-success btn-lg my-3 ms-2 text-black" onClick={() => {deleteButton()} }>
              Delete Comment
            </Link>
          </span>
          : ''
        }
    </div>
  )
}

export default CommentContent