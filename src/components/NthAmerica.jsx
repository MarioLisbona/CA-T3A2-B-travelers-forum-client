import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const NthAmerica = () => {
  return (
    <>
      <NavBar />
      <HeroImage heroClass={'n-am'} />
        <div className="container">
          <Header headingText={"Welcome to the North America!"} />
          <div className="row g-3">
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default NthAmerica