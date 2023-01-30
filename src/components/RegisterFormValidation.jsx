import { useRef, useState, useEffect } from "react"
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'

// regex patterns for username and password fields
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const RegisterFormValidation = ({ createMember }) => {

  // used to track the state of username input field and error message
  // will focus on username input on mount and focus on error message if there is one
  const userRef = useRef();
  const errRef = useRef();

  // track the state of user input entered
  // whether the user input entered is valid or not
  // whether the user input has focus or not
  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // track the state of password entered
  // whether the user password entered is valid or not
  // whether the user password has focus or not
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // track the state of matched password entered
  // whether the matched password entered is valid or not
  // whether the matched password has focus or not
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // track the state of whether an error message is showing
  // whether the state of whether all inputs have been entered correctly
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // set focus to username input on component load only
  useEffect(() => {
      userRef.current.focus();
  }, [])

  // anytime username input changes, check its validity against the regex pattern
  useEffect(() => {
      setValidName(USER_REGEX.test(user));
  }, [user])

  // anytime password or matchpassword input changes, check its validity against the regex pattern and against the other password
  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  // clear error message once its been read and user input adjusted accordingly
  useEffect(() => {
      setErrMsg('');
  }, [user, pwd, matchPwd])

  function handleSubmit(event) {
    event.preventDefault()

    createMember(user, pwd)
  }

  return (
    <section>
      {/* ternerary - if errmsg is truthy display error message class otherwise use offscreen class to change error message postition off screen  */}
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="p-5 py-4 bg-light rounded-3 border border-success">
      <label htmlFor="username">
          Username:
          {/* displaying font awesome icons for valid and invalid input */}
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}  />
          </span>
          {/* displaying font awesome icons for valid and invalid input */}

          <span className={validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
      </label>
      <input
        className="form-control"
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
        aria-invalid={validName ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
      />
      {/* displaying error message with requirements for username */}
      <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
      </p>


      <label htmlFor="password">
        Password:
        {/* displaying font awesome icons for valid and invalid password */}
        <span className={validPwd ? "valid" : "hide"}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        {/* displaying font awesome icons for valid and invalid password */}
        <span className={validPwd || !pwd ? "hide" : "invalid"} >
          <FontAwesomeIcon icon={faTimes} />
        </span>
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        {/* displaying error message with requirements for password */}
        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.<br />
          Must include uppercase and lowercase letters, a number and a special character.<br />
          Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
        </p>


        <label htmlFor="confirm_pwd">
          Confirm Password:
          {/* displaying font awesome icons for valid and invalid password match */}
          <span className={validMatch && matchPwd ? "valid" : "hide"} >
            <FontAwesomeIcon icon={faCheck} />
          </span>
          {/* displaying font awesome icons for valid and invalid password match */}
          <span className={validMatch || !matchPwd ? "hide" : "invalid"} >
          <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          className="form-control"
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPwd(e.target.value)}
          value={matchPwd}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        {/* displaying error message with requirements for passwordmatch */}
        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>

        {/* disablling the submit button untill all fields in the form have valid input */}
        <span>
          <button disabled={!validName || !validPwd || !validMatch ? true : false} className="btn btn-success my-2 me-1">Sign Up</button>
        </span>
        Already registered?<br />
        <span>
          <Link to="/login"><button type="button" className="btn btn-success my-2 me-1">Login</button></Link>
        </span>
        
      </form>



    </section>
  )
}

export default RegisterFormValidation