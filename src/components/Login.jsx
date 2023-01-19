import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'

const Login = () => {
  return (
    <>
    <NavBar />
    <HeroImage heroClass={'login'} />
      <div className="container">
        <Header headingText={"Login for more features"} />
        <div className="row g-3">
        </div>
      </div>
      <Footer />
  </>
  )
}

export default Login