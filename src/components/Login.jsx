import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// Login component
// Use - Displays login form
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Login form
//       - footer
////////////////////////////////////////////////////////////////////////////////////////////////

const Login = ({ forumMember }) => {
  return (
    <>
    {forumMember ? <MemberNavBar /> : <NavBar />}
    <HeroImage heroClass={'login'} />
      <div className="container">
        <Header headingText={"Login for more features"} btnText={'Login'} showBtn />
        <div className="row g-3">
        </div>
      </div>
      <Footer />
  </>
  )
}

export default Login