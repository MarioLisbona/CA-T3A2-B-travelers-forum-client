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
        <div class="container">
          <Header />
          <div class="row g-3">
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