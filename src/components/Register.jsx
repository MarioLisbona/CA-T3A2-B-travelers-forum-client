import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import RegisterFormValidation from './RegisterFormValidation'

// createMember function passed in as prop to be passed to RegisterFormValidation component
const Register = ({ createMember, regMessage, regSuccess, redirect, regFormResetState }) => {

  // Render registration page
  return (
    <>
    <HeroImage heroClass={'register'} />
      <div className="container">
        <Header headingText={"Register to become a member"} btnText={'Register'} />
        {/* render Component passing in createMember function */}
        <RegisterFormValidation
          createMember={createMember} 
          regSuccess={regSuccess} 
          regMessage={regMessage} 
          redirect={redirect} 
          regFormResetState={regFormResetState} 
        />
      </div>
  </>
  )
}

export default Register