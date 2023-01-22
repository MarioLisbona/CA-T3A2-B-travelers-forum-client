import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const Antarctica = ({ forumMember, antarcticaPosts }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'antarctica'} />
        <div className="container">
          <Header headingText={"Welcome to the Antarctica!"} btnText={'View all Antarctica Posts'} showBtn />
          <div className="row g-3">
            {antarcticaPosts.map((post, idx) => (
              <PreviewCard post={post} toPage={`/posts/${post._id}`} />
            ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Antarctica