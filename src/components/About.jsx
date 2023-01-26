import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import AboutInfo from './AboutInfo'


const About = ({ forumMember, logoutMember }) => {
  return (
    <>
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