import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
	return (
		<>
			<footer>
				<div className="row m-1">
					<div className="col-md-6">
							<p>Copyright © 2023 Traveler's Forum</p>
					</div>
					<div className="col-md-6 text-md-end">
							<Link to="/terms" className="text-dark">
								Terms of Use
							</Link>
							<span className="text-muted mx-2">|</span>
							<Link to="/privacy" className="text-dark">
								Privacy Policy
								</Link>
					</div>
				</div>
      </footer>
		</>
	)
}

export default Footer