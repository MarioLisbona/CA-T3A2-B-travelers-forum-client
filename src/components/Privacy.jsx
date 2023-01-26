import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

////////////////////////////////////////////////////////////////////////////////////////////////
// Privacy component
// Use - Displays information about the privacy policy for the forum
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

const Privacy = ({ forumMember }) => {
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