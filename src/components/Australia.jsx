import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const Australia = ({ forumMember, australiaPosts }) => {
  return (
    <>
     {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'australia'} />
        <div className="container">
          <Header headingText={"Welcome to the Australia!"} btnText={'View all Australia Posts'} showBtn />
          <div className="row g-3">
            {australiaPosts.map((post, idx) => (
              <PreviewCard post={post} toPage={`/posts/${post._id}`} />
            ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Australia