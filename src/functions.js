  // couldnt manage to regirect to /login  with a <Link> inside registration form so did it here
  function redirect() {
    nav("/login")
    setRegMessage('')
  }

  export { redirect }