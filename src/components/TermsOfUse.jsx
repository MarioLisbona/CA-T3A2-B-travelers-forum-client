import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// TermsOfUse component
// Use - Displays information about the terms for using the forum
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, no CTA button
//       - footer
////////////////////////////////////////////////////////////////////////////////////////////////

const TermsOfUse = ({ forumMember }) => {
  return (
    <>
    {forumMember ? <MemberNavBar /> : <NavBar />}
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