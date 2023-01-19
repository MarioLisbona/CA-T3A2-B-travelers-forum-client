import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const Australia = () => {
  return (
    <>
      <NavBar />
      <HeroImage heroClass={'australia'} />
        <div className="container">
          <Header headingText={"Welcome to the Australia!"} btnText={'View all Australia Posts'} />
          <div className="row g-3">
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Australia