import React from 'react'
import { Link } from 'react-router-dom'


const PreviewCard = ({ post }) => {


	return (
		<>
			<div className="col-md-6 col-lg-4 col-xl-3">
				<div className="card mx-auto m-1 bg-secondary text-white">
						<div className="card-body">
								<h5 className="card-title">{post.title}</h5>
								<h6>{`Author: ${post.author}`}</h6>
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