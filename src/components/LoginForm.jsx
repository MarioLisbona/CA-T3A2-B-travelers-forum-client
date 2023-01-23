import React from 'react'

const LoginForm = () => {
  return (
    <>
      <form class="p-5 bg-light rounded-3">
        <div class="row mb-3">
          <label for="inputPostTitle" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-4">
            <input type="email" class="form-control" id="inputEmail"></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPostTitle" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-4">
            <input type="password" class="form-control" id="inputPassword"></input>
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

export default LoginForm