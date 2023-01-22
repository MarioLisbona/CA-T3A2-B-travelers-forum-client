import React from 'react'
import { Link } from 'react-router-dom'



const CtaButton = ({ showBtn1, showBtn2, btn1Text, btn2Text }) => {
  return (
    <>
      {/* <Link to="https://www.google.com" target="_blank" className="btn btn-success btn-lg">
				{btn1Text}
			</Link> */}

      {showBtn1 ? <Link to="https://www.google.com" target="_blank" className="btn btn-success btn-lg">{btn1Text}</Link> : ''}
      {showBtn2 ? <Link to="https://www.google.com" target="_blank" className="btn btn-success btn-lg">{btn2Text}</Link> : ''}
    </>
  )
}

export default CtaButton