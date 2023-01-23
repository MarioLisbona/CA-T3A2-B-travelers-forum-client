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

const CommentContent = () => {
  return (
    <div className="p-5 my-2 bg-light rounded-3">
        <div class="row">
            <div class="col-md-4">
                <div>
                  <div class="row">
                    <div class="col-md-4">
                      <div>Member:</div>
                    </div>
                    <div class="col-md-6">
                      <div class="bg-alt mb-2">Username</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-4">
                      <div>Posted:</div>
                    </div>
                    <div class="col-md-7 mb-4">
                      <div class="bg-alt mb-2">4-July-2023</div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="bg-alt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quia laboriosam illo inventore officiis id, at suscipit velit exercitationem iste voluptas! Minima veniam voluptates repellat.</div>
            </div>
        </div>
    </div>
  )
}

export default CommentContent