import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'

const TermsOfUse = ({ forumMember }) => {
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