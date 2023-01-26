import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'

const PageNotFound = () => {
  
  return (
    <>
      <HeroImage heroClass={'about'} />
        <div className="container">
          <Header headingText={"Error: 404 - Page not found"} />
          <div className="row g-3">
          </div>
        </div>
    </>
  )
}

export default PageNotFound





