import React from 'react'
import { Link } from 'react-router-dom'
import CtaButton from './CtaButton'

////////////////////////////////////////////////////////////////////////////////////////////////
// Header component
// Use - Displays a header with information form the use and conditionally rendered CTA button
//
// props: 
//       - headingText - text for heading
//       - btn1Text - text for CTA button
//       - showBtn1 - show or hide CTA button
//
// components used:
//       - Bootstrap elements and CtaButton component
//       - Link 
////////////////////////////////////////////////////////////////////////////////////////////////

const Header = ({ headingText, bodyText, btn1Text, showBtn1, btn1ToPage, btn2Text, showBtn2, btn2ToPage} ) => {

	return (
		<div className="p-5 my-4 bg-light rounded-3 border border-success">
				<h1>{headingText}</h1>
				<p className="lead">{bodyText}</p>
				<p>
					{showBtn1 ? <CtaButton showBtn1 btn1Text={btn1Text} btn1ToPage={btn1ToPage} /> : ''}
					{showBtn2 ? <CtaButton showBtn2 btn2Text={btn2Text} btn2ToPage={btn2ToPage} /> : ''}
				</p>
		</div>
	)
}

export default Header