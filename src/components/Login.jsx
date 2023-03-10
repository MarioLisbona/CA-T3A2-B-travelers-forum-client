import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import LoginForm from './LoginForm'

const Login = ({ loginMember, loginInput, loginSuccess, loginMessage, loginRedirect, loginFormResetState }) => {

  return (
    <>
    <HeroImage heroClass={'login'} />
      <div className="container">
        <Header headingText={"Login for more features"} btnText={'Login'} showBtn />
        {/* render loginform passing in loginMember function */}
        <LoginForm loginMember={loginMember} loginInput={loginInput} loginSuccess={loginSuccess} loginMessage={loginMessage} loginRedirect={loginRedirect} loginFormResetState={loginFormResetState} />
      </div>
  </>
  )
}

export default Login