import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const ViewContinent = () => {
  return (
    <>
    <NavBar />
    <HeroImage  />
      <div className="container">
        <Header headingText={"Browse the by Continent"} btnText={'View all South America Posts'} />
        <div className="row g-3">
          <PreviewCard />
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

export default ViewContinent