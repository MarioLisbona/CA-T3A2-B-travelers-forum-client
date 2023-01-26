import React from 'react'
import CtaButton from './CtaButton'

const MemberHeader = ( { headingText, bodyText, showBtn1, showBtn2, btn1Text, btn2Text} ) => {
  
  return (
    <div className="p-5 my-4 bg-light rounded-3 border border-success">
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