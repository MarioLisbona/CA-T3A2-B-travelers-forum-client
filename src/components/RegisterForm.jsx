import React, { useState } from 'react'


const RegisterForm = ({ addUser }) => {

  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function submitFormRegister(event) {
    event.preventDefault()
    console.log({email: email, username: username, password: password})

    AddUser(email, username, password)
  }

  function submitForm(event) {
    event.preventDefault()
    console.log({email: email, username: username, password: password})

    addUser(email, username, password)
  }

  return (
    <>
      <form onSubmit={submitForm} class="p-5 bg-light rounded-3 border border-success">
        <div class="row mb-3">
          <label for="inputPostTitle" class="col-sm-2 col-form-label">Username</label>
          <div class="col-sm-4">
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} class="form-control" id="inputUsername"></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPostTitle" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-4">
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} class="form-control" id="inputEmail"></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPostTitle" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-4">
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} class="form-control" id="inputPassword"></input>
          </div>
        </div>
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0"></legend>
          <div class="col-sm-4">
            <button type="submit" class="btn btn-success">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default RegisterForm