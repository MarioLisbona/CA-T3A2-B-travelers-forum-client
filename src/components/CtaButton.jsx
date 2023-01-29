import React from 'react'
import { Link } from 'react-router-dom'

const CtaButton = ({ showBtn1, showBtn2, btn1Text, btn2Text, btn1ToPage, btn2ToPage }) => {
  
    // conditionally renders one or two buttons depending on props passed in
  return (
    <>
      {/* {showBtn1 ? <Link to={btn1ToPage} className="btn btn-success btn-lg m-1">{btn1Text}</Link> : ''}
      {showBtn2 ? <Link to={btn2ToPage} className="btn btn-success btn-lg ms-2 my-1">{btn2Text}</Link> : ''} */}
      {showBtn1 ? <Link to={btn1ToPage}><button type="button" class="btn btn-success my-2 me-1">{btn1Text}</button></Link> : ''}
      {showBtn2 ? <Link to={btn2ToPage}><button type="button" class="btn btn-success my-2 me-1">{btn2Text}</button></Link> : ''}
    </>
  )
}

export default CtaButton