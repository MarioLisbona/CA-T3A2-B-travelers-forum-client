import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'
import RegisterFormValidation from './RegisterFormValidation'

// createMember function passed in as prop to be passed to RegisterFormValidation component
const Register = ({ createMember }) => {

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