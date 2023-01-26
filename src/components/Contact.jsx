import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'
import SocialMedia from './SocialMedia'

const Contact = () => {

  return (
    <>
      <HeroImage heroClass={'contact'} />
        <div className="container">
          <Header headingText={"Connect with us at the links below"} btnText={'View all Contact Information'} />
          <SocialMedia />
        </div>
    </>
  )
}

export default Contact