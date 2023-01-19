import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const Antarctica = () => {
  return (
    <>
      <NavBar />
      <HeroImage />
        <div className="container">
          <Header headingText={"Welcome to the Antarctica!"} />
          <div className="row g-3">
            <PreviewCard />
            <PreviewCard />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Antarctica