import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

const Africa = ({ forumMember }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'acirfa'}/>
        <div className="container">
          <Header headingText={"Welcome to the African Continent!"} btnText={'View all Africa Posts'} showBtn  />
          <div className="row g-3">
            <PreviewCard />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Africa