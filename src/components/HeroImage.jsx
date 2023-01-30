import React from 'react'

const HeroImage = ({ heroClass }) => {
	
	return (
		<>
		{/* display hero image at the top of page */}
			<section className={heroClass}>
        <span className="background-image" role="img" aria-label="Mountain range in Austria"></span>
      </section>
		</>
	)
}

export default HeroImage