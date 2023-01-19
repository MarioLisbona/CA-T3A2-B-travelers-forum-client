import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <NavBar />
      <HeroImage />
        <div className="container">
          <Header headingText={"So you wanna know more???"} />
          <div className="row g-3">
          </div>
        </div>
        <Footer />
    </>
  )
}

export default About