import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import SocialMedia from './SocialMedia'

////////////////////////////////////////////////////////////////////////////////////////////////
// Contact component
// Use - Displays information on how to connect with the owners for the company
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, no CTA button
//       - SocialMedia component
//       - footer
////////////////////////////////////////////////////////////////////////////////////////////////

const Contact = ({ forumMember }) => {
  return (
    <>
      <HeroImage heroClass={'contact'} />
        <div className="container">
          <Header headingText={"Connect with us at the links below"} btnText={'View all Contact Information'} />
          <SocialMedia />
        </div>
        <Footer />
    </>
  )
}

export default Contact