import React from 'react'

////////////////////////////////////////////////////////////////////////////////////////////////
// CommentContent component
// Use - A container to display comment details and the comment
//
// props: 
//       - 
//       - 
//
// components used:
//       - Bootstrap rows and columns with classes applied
////////////////////////////////////////////////////////////////////////////////////////////////

const CommentContent = ({ comment }) => {
  return (
    <div className="p-5 my-2 bg-light rounded-3">
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
                      <div className="bg-alt mb-2">4-July-2023</div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="bg-alt">{comment.content}</div>
            </div>
        </div>
    </div>
  )
}

export default CommentContent