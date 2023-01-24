import React from 'react'

////////////////////////////////////////////////////////////////////////////////////////////////
// PostContent component
// Use - A container to display post details and content
//
// props: 
//       - 
//       - 
//
// components used:
//       - Bootstrap rows and columns with classes applied
////////////////////////////////////////////////////////////////////////////////////////////////

const PostContent = ({ post }) => {

  return (
    <div className="p-5 mt-5 bg-light rounded-3">
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
            <div className="col-md-12">
                <div className="bg-alt">{post[0].content}</div>
            </div>
        </div>
    </div>
  )
}

export default PostContent