import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const Africa = () => {
  return (
    <>
      <NavBar />
      <HeroImage />
        <div className="container">
          <Header headingText={"Welcome to the African Continent!"} />
          <div className="row g-3">
            <PreviewCard />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Africa