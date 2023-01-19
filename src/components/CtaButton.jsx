import React from 'react'
import { Link } from 'react-router-dom'



const CtaButton = ({ btnText }) => {
  return (
    <>
      <Link to="https://www.google.com" target="_blank" className="btn btn-success btn-lg">
				{btnText}
			</Link>
    </>
  )
}

export default CtaButton