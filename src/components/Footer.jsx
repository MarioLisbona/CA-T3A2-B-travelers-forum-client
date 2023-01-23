import React from 'react'
import { Link } from 'react-router-dom'

////////////////////////////////////////////////////////////////////////////////////////////////
// Footer component
// Use - Displays a footer at the bottom of every page
//
// props: 
//       - 
//
// components used:
//       - Bootstrap elements and styles
//       - Link component
////////////////////////////////////////////////////////////////////////////////////////////////

const Footer = () => {
	return (
		<>
			<footer>
			<hr></hr>
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
							<span className="text-muted mx-2">|</span>
							<Link to="/contact" className="text-dark">
								Contact Us
							</Link>
					</div>
				</div>
      </footer>
		</>
	)
}

export default Footer