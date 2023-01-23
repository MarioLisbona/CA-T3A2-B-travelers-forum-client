import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import RegisterForm from './RegisterForm'


////////////////////////////////////////////////////////////////////////////////////////////////
// Register component
// Use - Displays a form for a guest to register as a member
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, no CTA button
//       - footer
////////////////////////////////////////////////////////////////////////////////////////////////

const Register = ({ forumMember }) => {
  return (
    <>
    {forumMember ? <MemberNavBar /> : <NavBar />}
    <HeroImage heroClass={'register'} />
      <div className="container">
        <Header headingText={"Register to become a member"} btnText={'Register'} />
        <RegisterForm />
      </div>
      <Footer />
  </>
  )
}

export default Register