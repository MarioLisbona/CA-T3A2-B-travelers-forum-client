import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <NavBar />
      <HeroImage heroClass={'contact'} />
        <div className="container">
          <Header headingText={"Connect with us at the links below"} />
          <div className="row g-3">
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact