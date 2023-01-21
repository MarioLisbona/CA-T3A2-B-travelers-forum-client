import React from 'react'

const CommentContent = () => {
  return (
    <div className="p-5 my-2 bg-light rounded-3">
        <div class="row">
            <div class="col-md-4">
                <div>
                  <div class="row">
                    <div class="col-md-3">
                      <div>Member:</div>
                    </div>
                    <div class="col-md-6">
                      <div class="demo-content bg-alt">Username</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-3">
                      <div>Posted:</div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div class="demo-content bg-alt">4-July-2023</div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="demo-content bg-alt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quia laboriosam illo inventore officiis id, at suscipit velit exercitationem iste voluptas! Minima veniam voluptates repellat.</div>
            </div>
        </div>
    </div>
  )
}

export default CommentContent