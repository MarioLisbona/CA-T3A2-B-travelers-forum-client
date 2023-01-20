import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const Privacy = ({ forumMember }) => {
  return (
    <>
   {forumMember ? <MemberNavBar /> : <NavBar />}
    <HeroImage  />
      <div className="container">
        <Header headingText={"View our privacy policies"} btnText={'View all Privacy info'} />
        <div className="row g-3">
        </div>
      </div>
      <Footer />
  </>
  )
}

export default Privacy