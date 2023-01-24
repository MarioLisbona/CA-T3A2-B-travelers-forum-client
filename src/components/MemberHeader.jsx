import React from 'react'
import { Link } from 'react-router-dom'
import CtaButton from './CtaButton'

////////////////////////////////////////////////////////////////////////////////////////////////
// MemberHeader component
// Use - Displays header for members with 2 CTA buttons
//
// props: 
//       - headingText - used to conditionally render guest or member navbar
//       - showBtn1 - display or hide button 1
//       - showBtn2 - display or hide button 2
//       - btn1Text - text for button 1
//       - btn1Text - text for button 2
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Login form
//       - footer
////////////////////////////////////////////////////////////////////////////////////////////////

const MemberHeader = ( { headingText, bodyText, showBtn1, showBtn2, btn1Text, btn2Text} ) => {
  return (
    <div className="p-5 my-4 bg-light rounded-3">
    <h1>{headingText}</h1>
    <p className="lead">{bodyText}</p>
    <p>
      {showBtn1 ? <CtaButton showBtn1 btn1Text={btn1Text} btn1ToPage={"/posts"} /> : ''} {showBtn2 ? <CtaButton showBtn2 btn2Text={btn2Text} btn2ToPage={"/posts/create"} /> : ''}
    </p>
</div>
  )
}

export default MemberHeader

"/posts/create"