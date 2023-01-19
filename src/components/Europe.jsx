import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const Europe = () => {
  return (
    <>
      <NavBar />
      <HeroImage heroClass={'europe'} />
        <div className="container">
          <Header headingText={"Welcome to the Europe!"} btnText={'View all Europe Posts'}  showBtn />
          <div className="row g-3">
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Europe