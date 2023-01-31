import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'

const SearchingForPost = () => {
  return (
    <>
    <HeroImage heroClass={'about'} />
      <div className="container">
        <Header headingText={"Locating Post...."} />
        <div className="row g-3">
        </div>
      </div>
  </>
  )
}

export default SearchingForPost