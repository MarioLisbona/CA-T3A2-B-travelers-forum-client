import React from 'react'
import { Link } from 'react-router-dom'


const PreviewCard = () => {
	return (
		<>
			<div className="col-md-6 col-lg-4 col-xl-3">
				<div className="card mx-auto m-1 bg-secondary text-white">
						<div className="card-body">
								<h5 className="card-title">South America</h5>
								<p className="card-text">A story about adventures traveling through south america</p>
								<Link to="#" className="btn btn-primary">
									View
								</Link>
						</div>
				</div>
			</div>
		</>
	)
}

export default PreviewCard