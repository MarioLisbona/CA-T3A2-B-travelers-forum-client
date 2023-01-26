import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import AboutInfo from './AboutInfo'

////////////////////////////////////////////////////////////////////////////////////////////////
// About component
// Use - Displays information about the forum
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, no CTA button, About Info component
//       - footer
////////////////////////////////////////////////////////////////////////////////////////////////

const About = ({ forumMember, logoutMember }) => {
  return (
    <>
      {/* conditionally render navbar for guest and member */}
      {/* {forumMember ? <MemberNavBar logoutMember={logoutMember} /> : <NavBar />} */}
      {/* Heroimage */}
      <HeroImage heroClass={'about'} />
      {/* container for main body of the page */}
      <div className="container">
        <Header 
          headingText={"So you wanna know more???"}
          bodyText={<AboutInfo />}
          btnText={'Learn More'} />
      </div>
      <Footer />
    </>
  )
}

export default About