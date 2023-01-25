import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const RegisterFormValidation = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd, matchPwd])

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ user: user, password: pwd })
  }


  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} class="p-5 bg-light rounded-3 border border-success">
      <label htmlFor="username">
          Username:
          <span className={validName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck}  />
          </span>
          <span className={validName || !user ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
      </label>
      <input
        class="form-control"
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
      <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
      </p>


      <label htmlFor="password">
        Password:
        <span className={validPwd ? "valid" : "hide"}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span className={validPwd || !pwd ? "hide" : "invalid"} >
          <FontAwesomeIcon icon={faTimes} />
        </span>
        </label>
        <input
          class="form-control"
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
        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.<br />
          Must include uppercase and lowercase letters, a number and a special character.<br />
          Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
        </p>


        <label htmlFor="confirm_pwd">
          Confirm Password:
          <span className={validMatch && matchPwd ? "valid" : "hide"} >
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validMatch || !matchPwd ? "hide" : "invalid"} >
          <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          class="form-control"
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
        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>

        <button disabled={!validName || !validPwd || !validMatch ? true : false} className="btn btn-success btn-lg my-3">Sign Up</button>
      </form>

      <p>
        Already registered?<br />
        <span>
          {/*put router link here*/}
          <Link to="/login" className="btn btn-success btn-lg my-3 text-black">
            Login
          </Link>
        </span>
      </p>

    </section>
  )
}

export default RegisterFormValidation