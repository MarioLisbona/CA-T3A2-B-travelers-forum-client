import React from 'react'
import { Link } from 'react-router-dom'

const PreviewCard = ({ post }) => {

	return (
		<>
			<div className="col-md-6 col-lg-4 col-xl-3">
				<div className="card mx-auto m-1 bg-secondary text-white border border-success">
						<div className="card-body">
								<h5 className="card-title">{post.title.substring(0, 100)}</h5>
								{/* need to wait till structured of posted posts is correct in DB */}
								<h6>{`Author: ${post.author.username}`}</h6>
								<h6>{`Author: ${post.date_posted.substring(0, 10)}`}</h6>
								<hr></hr>
								<p className="card-text">{`${post.content.substring(0, 150)}......`}</p>
								<Link to={`/posts/${post._id}`} className="btn btn-primary">
									Read more
								</Link>
						</div>
				</div>
			</div>
		</>
	)
}

export default PreviewCard