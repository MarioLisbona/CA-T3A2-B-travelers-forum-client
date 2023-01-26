import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'
import LoginForm from './LoginForm'

const Login = ({ loginMember }) => {

  return (
    <>
    <HeroImage heroClass={'login'} />
      <div className="container">
        <Header headingText={"Login for more features"} btnText={'Login'} showBtn />
        <LoginForm loginMember={loginMember} />
      </div>
  </>
  )
}

export default Login