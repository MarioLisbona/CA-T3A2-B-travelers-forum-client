import React from 'react'

const Footer = () => {
	return (
		<>
			<footer>
				<div className="row m-1">
					<div className="col-md-6">
							<p>Copyright © 2023 Traveler's Forum</p>
					</div>
					<div className="col-md-6 text-md-end">
							<a href="/terms" className="text-dark">Terms of Use</a>
							<span className="text-muted mx-2">|</span>
							<a href="/privacy" className="text-dark">Privacy Policy</a>
					</div>
				</div>
      </footer>
		</>
	)
}

export default Footer