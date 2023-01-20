import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const Australia = ({ forumMember }) => {
  return (
    <>
     {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'australia'} />
        <div className="container">
          <Header headingText={"Welcome to the Australia!"} btnText={'View all Australia Posts'} showBtn />
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