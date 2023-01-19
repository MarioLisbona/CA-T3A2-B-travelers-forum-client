import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const TermsOfUse = () => {
  return (
    <>
    <NavBar />
    <HeroImage  />
      <div className="container">
        <Header headingText={"Terms of use and Conditions"} btnText={'View our terms'}  />
        <div className="row g-3">
        </div>
      </div>
      <Footer />
  </>
  )
}

export default TermsOfUse