import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'

const Privacy = () => {
  return (
    <>
    <HeroImage heroClass={'europe'} />
      <div className="container">
        <Header headingText={"View our privacy policies"} btnText={'View all Privacy info'} />
        <div className="row g-3">
        </div>
      </div>
      <Footer />
  </>
  )
}

export default Privacy