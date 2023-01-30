import React from 'react'
import CtaButton from './CtaButton'

const Header = ({ headingText, bodyText, btn1Text, showBtn1, btn1ToPage, btn2Text, showBtn2, btn2ToPage} ) => {

	// display header with heading/body text and conditionally rendered CTA buttons
	return (
		<div className="p-5 py-3 my-4 bg-light rounded-3 border border-success">
				<h1>{headingText}</h1>
				<p className="lead">{bodyText}</p>
				<p>
					{showBtn1
						? <CtaButton
								showBtn1 
								btn1Text={btn1Text} 
								btn1ToPage={btn1ToPage}
							/> 
						: ''
					}
					{showBtn2
						? <CtaButton 
								showBtn2 
								btn2Text={btn2Text} 
								btn2ToPage={btn2ToPage} 
							/> 
						: ''
					}
				</p>
		</div>
	)
}

export default Header