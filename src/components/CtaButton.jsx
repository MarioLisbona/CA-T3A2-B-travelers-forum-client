import React from 'react'
import { Link } from 'react-router-dom'

////////////////////////////////////////////////////////////////////////////////////////////////
// CtaButton component
// Use - Button link to access a feature or function of the site
//
// props: 
//       - showBtn1 - display or hide button 1
//       - showBtn2 - display or hide button 2
//       - btn1Text - text for button 1
//       - btn1Text - text for button 2
//       - btn1ToPage - link for button 1
//       - btn2ToPage - link for button 2
//
// components used:
//       - Link Component
////////////////////////////////////////////////////////////////////////////////////////////////

const CtaButton = ({ showBtn1, showBtn2, btn1Text, btn2Text, btn1ToPage, btn2ToPage }) => {
  return (
    <>
      {showBtn1 ? <Link to={btn1ToPage} className="btn btn-success btn-lg my-1">{btn1Text}</Link> : ''}
      {showBtn2 ? <Link to={btn2ToPage} className="btn btn-success btn-lg my-1">{btn2Text}</Link> : ''}
    </>
  )
}

export default CtaButton