import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'

// redner terms of use page
const TermsOfUse = () => {
  return (
    <>
    <HeroImage heroClass={'europe'} />
      <div className="container">
        <Header headingText={"Terms of use and Conditions"} btnText={'View our terms'}  />
        <div className="row g-3">
        </div>
      </div>
  </>
  )
}

export default TermsOfUse