import React, { useEffect, useState } from 'react'

const LoginForm = ({ loginMember, loginInput, loginSuccess, loginMessage, loginRedirect, loginFormResetState }) => {

  // tracking stae of login form data
  const [username, setUsername] = useState(loginInput)
  const [password, setPassword] = useState()

  // useeffect to automatically show the modal
  // if statement prevents the modal being show on mount prior to login details have been entered
  useEffect(() => {
    if (!loginMessage == '') {
      $(document).ready(function(){
        $("#ModalLogin").modal('show');
      })
    }
    
  }, [loginSuccess, loginMessage])


    // reset user inputs if the user registration fails 
    // and call loginFormResetState to reset state in App.
    // This is so the modal will keep showing on every failed login attempt
    function loginFormReset() {
      setUsername('')
      setPassword('')
      loginFormResetState()
    }

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
      {/* Modal  */}
      <div className="modal fade" data-keyboard="false" data-backdrop="static" id='ModalLogin' tabIndex="-1" role="dialog"  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-3">
            <div className="modal-header p-0 py-3">
              <h5 className="modal-title" id="exampleModalLongTitle">{loginMessage}</h5>
            </div>
            <div className="modal-footer p-0 py-3">
              {/* on ok click - if login successful call redirect function and redirect to /login/
              if registration fails call regFormReset to reset input fields and reset state */}
              <button onClick={loginSuccess ? loginRedirect : loginFormReset } type="button" className="btn btn-success" data-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm