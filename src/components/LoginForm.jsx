import React, { useState } from 'react'

const LoginForm = ({ loginMember, loginInput }) => {

  // tracking stae of login form data
  const [username, setUsername] = useState(loginInput)
  const [password, setPassword] = useState()

  // once form is submitted prevent default and call loginMember function passing in form data
  function submitForm(event) {
    event.preventDefault()
    loginMember(username, password)
  }

  return (
    <>
    {/* login form inputs */}
      <form onSubmit={submitForm} className="p-5 pt-3 pb-2 bg-light rounded-3 border border-success">
        <div className="row mb-3">
          <label for="inputUsername" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-4">
            <input required type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="form-control" id="inputUsername"></input>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-4">
            <input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" id="inputPassword"></input>
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0"></legend>
          <div className="col-sm-4">
            <button type="submit" className="btn btn-success my-2">Login</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default LoginForm