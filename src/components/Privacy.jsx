import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'

const Privacy = () => {
  return (
    // render privacy page info
    <>
    <HeroImage heroClass={'europe'} />
      <div className="container">
        <Header headingText={"View our privacy policies"} btnText={'View all Privacy info'} />
        <div className="row g-3">
        </div>
      </div>
  </>
  )
}

export default Privacy