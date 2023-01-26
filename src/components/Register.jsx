import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'
import RegisterFormValidation from './RegisterFormValidation'

const Register = ({ forumMember, createMember }) => {

  return (
    <>
    <HeroImage heroClass={'register'} />
      <div className="container">
        <Header headingText={"Register to become a member"} btnText={'Register'} />
        <RegisterFormValidation createMember={createMember} />
      </div>
  </>
  )
}

export default Register