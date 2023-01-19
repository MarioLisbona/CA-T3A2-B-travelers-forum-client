import React from 'react'
import './HeroImage.css'

const HeroImage = ({ heroClass }) => {
	return (
		<>
			{/* <section className={heroClass}> */}
			<section className="test" style ={ { background: "url('../src/assets/hero-img-landing.jpg')" } }>
        <span className="background-image" role="img" aria-label="Mountain range in Austria"></span>
      </section>
		</>
	)
}

export default HeroImage