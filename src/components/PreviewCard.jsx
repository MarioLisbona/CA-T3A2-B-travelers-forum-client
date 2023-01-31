import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

// Post object passed in when mapping over posts array and creating each preview card
const PreviewCard = ({ post, editDelete }) => {

	return (
		<>
			<div className="col-md-6 col-lg-4 col-xl-3">
				<div className="card mx-auto m-1 bg-secondary text-white border border-success" style={{ minHeight: "350px", maxHeight: "500px"}}>
						<div className="card-body">
								<h5 className="card-title">{`${post.title.substring(0, 50)}...`}</h5>
								<h6>{`Author: ${post.author.username}`}</h6>
								<h6>{`Contient: ${post.category}`}</h6>
								{/* <h6>{`Posted: ${post.date_posted.substring(0, 10)}`}</h6> */}
								<h6>{`Posted: ${moment(post.date_posted).startOf('minute').fromNow()}`}</h6>
								<hr className="p-0 my-1"></hr>
								<p className="card-text">{`${post.content.substring(0, 150)}......`}</p>
								{/* Render button to go to fullpage post. If the logged in member is the owner , gthe button will render Edit / delete */}
								<Link to={`/posts/${post._id}`}>
									<button
										type="button" 
										className="btn btn-success position-absolute bottom-0 start-10 translate-x my-3">
										{editDelete ? 'Edit / Delete' : 'Read more'}
									</button>
								</Link>
						</div>
				</div>
			</div>
		</>
	)
}

export default PreviewCard