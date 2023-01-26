import React, { useState } from 'react'
import CtaButton from './CtaButton'

const LoginForm = ({ loginMember }) => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function submitForm(event) {
    event.preventDefault()
    
    loginMember(username, password)
  }

  return (
    <>
      <form onSubmit={submitForm} class="p-5 bg-light rounded-3 border border-success">
        <div class="row mb-3">
          <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
          <div class="col-sm-4">
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} class="form-control" id="inputUsername"></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-4">
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} class="form-control" id="inputPassword"></input>
          </div>
        </div>
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0"></legend>
          <div class="col-sm-4">
            <button type="submit" class="btn btn-success btn-lg">Login</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default LoginForm