import React from 'react'
// import './HeroImage.css'

////////////////////////////////////////////////////////////////////////////////////////////////
// HeroImage component
// Use - Displays a full screen banner image
//
// props: 
//       - heroClass - used to assign a different background image for each continent and section
//
// components used:
//       - Bootstrap elements and styles
////////////////////////////////////////////////////////////////////////////////////////////////

const HeroImage = ({ heroClass }) => {
	return (
		<>
			<section className={heroClass}>
        <span className="background-image" role="img" aria-label="Mountain range in Austria"></span>
      </section>
		</>
	)
}

export default HeroImage