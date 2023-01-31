import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import Footer from './Footer'
import LoginForm from './LoginForm'

const Login = ({ loginMember, loginInput }) => {

  return (
    <>
    <HeroImage heroClass={'login'} />
      <div className="container">
        <Header headingText={"Login for more features"} btnText={'Login'} showBtn />
        {/* render loginform passing in loginMember function */}
        <LoginForm loginMember={loginMember} loginInput={loginInput} />
      </div>
  </>
  )
}

export default Login