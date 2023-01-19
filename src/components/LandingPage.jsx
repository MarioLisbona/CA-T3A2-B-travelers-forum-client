import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const LandingPage = () => {
	return (
		<>
      <NavBar />
      <HeroImage />
        <div className="container">
          <Header headingText={"Welcome to the Traveler's Forum"} />
          <div className="row g-3">
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
          </div>
        </div>
        <Footer />
		</>
	)
}

export default LandingPage