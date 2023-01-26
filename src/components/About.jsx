import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import AboutInfo from './AboutInfo'

const About = () => {

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
    </>
  )
}

export default About