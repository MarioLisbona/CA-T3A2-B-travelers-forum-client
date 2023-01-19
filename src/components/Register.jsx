import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'

const Register = () => {
  return (
    <>
    <NavBar />
    <HeroImage  />
      <div className="container">
        <Header headingText={"Register to become a member"} />
        <div className="row g-3">
        </div>
      </div>
      <Footer />
  </>
  )
}

export default Register