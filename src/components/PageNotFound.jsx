import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const PageNotFound = ({ forumMember }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'about'} />
        <div className="container">
          <Header headingText={"Error: 404 - Page not found"} />
          <div className="row g-3">
          </div>
        </div>
        <Footer />
    </>
  )
}

export default PageNotFound





