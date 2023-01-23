import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import LoginForm from './LoginForm'

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

const Login = ({ forumMember, loginDetails }) => {
  return (
    <>
    {forumMember ? <MemberNavBar /> : <NavBar />}
    <HeroImage heroClass={'login'} />
      <div className="container">
        <Header headingText={"Login for more features"} btnText={'Login'} showBtn />
        <LoginForm loginDetails={loginDetails} />
      </div>
      <Footer />
  </>
  )
}

export default Login