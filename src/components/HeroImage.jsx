import React from 'react'
import './HeroImage.css'

const HeroImage = ({ heroClass }) => {
	return (
		<>
			{/* <section className="hero-image"> */}
			<section className={heroClass}>
        <span className="background-image" role="img" aria-label="Mountain range in Austria"></span>
      </section>
		</>
	)
}

export default HeroImage