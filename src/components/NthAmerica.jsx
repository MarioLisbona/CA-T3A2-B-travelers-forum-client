import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const NthAmerica = ({ forumMember, nthAmericaPosts }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'n-am'} />
        <div className="container">
          <Header headingText={"Welcome to the North America!"} btnText={'View all North America Posts'} showBtn />
          <div className="row g-3">
            {nthAmericaPosts.map((post, idx) => (
              <PreviewCard post={post} toPage={`/posts/${post._id}`} />
            ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default NthAmerica