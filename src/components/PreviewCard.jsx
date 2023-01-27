import React from 'react'
import { Link } from 'react-router-dom'

// Post object passed in when mapping over posts array and creating each preview card
const PreviewCard = ({ post }) => {

	return (
		<>
			<div className="col-md-6 col-lg-4 col-xl-3">
				<div className="card mx-auto m-1 bg-secondary text-white border border-success" style={{ minHeight: "350px", maxHeight: "500px"}}>
						<div className="card-body">
								<h5 className="card-title">{post.title.substring(0, 100)}</h5>
								<h6>{`Author: ${post.author.username}`}</h6>
								<h6>{`Author: ${post.date_posted.substring(0, 10)}`}</h6>
								<hr></hr>
								<p className="card-text">{`${post.content.substring(0, 150)}......`}</p>
								
								<Link to={`/posts/${post._id}`} className="btn btn-primary position-absolute bottom-0 start-10 translate-x my-3">
									Read more
								</Link>
						</div>
				</div>
			</div>
		</>
	)
}

export default PreviewCard