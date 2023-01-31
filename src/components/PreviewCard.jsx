import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

// Post object passed in when mapping over posts array and creating each preview card
const PreviewCard = ({ post, editDelete }) => {

	return (
		<>
			<div className="col-md-6 col-lg-4 col-xl-3">
				<div className="card mx-auto m-1 bg-secondary bg-gradient shadow text-white border border-success" style={{ minHeight: "400px", maxHeight: "500px"}}>
						<div className="card-body">
								<h3 className="card-title">{`${post.title.substring(0, 50)}...`}</h3>
								<h6 class="text-white-50">{`Author: ${post.author.username}`}</h6>
								<h6 class="text-white-50">{`Contient: ${post.category}`}</h6>
								<h6 class="text-white-50">{`Posted: ${moment(post.date_posted).startOf('minute').fromNow()}`}</h6>
								<hr className="p-0 my-2"></hr>
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