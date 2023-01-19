import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const Asia = () => {
  return (
    <>
      <NavBar />
      <HeroImage heroClass={'asia'}/>
        <div className="container">
          <Header headingText={"Welcome to the Asian Continent!"} />
          <div className="row g-3">
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

export default Asia