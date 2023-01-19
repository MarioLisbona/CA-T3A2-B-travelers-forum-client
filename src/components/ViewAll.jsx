import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const ViewAll = () => {
  return (
    <>
    <NavBar textColor={"text-success-emphasis"} btnText={"Home"} toPage={"/"} />
    <HeroImage  heroClass={'view-all'}/>
      <div className="container">
        <Header headingText={"Browse the entire Forum"} btnText={'View all Posts'} showBtn />
        <div className="row g-3">
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
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

export default ViewAll