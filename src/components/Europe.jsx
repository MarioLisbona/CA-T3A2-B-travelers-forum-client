import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const Europe = ({ forumMember, europePosts }) => {

  console.log(europePosts)
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'europe'} />
        <div className="container">
          <Header headingText={"Welcome to the Europe!"} btnText={'View all Europe Posts'}  showBtn />
          <div className="row g-3">
            {europePosts.map((post, idx) => (
              <PreviewCard post={post} toPage={`/posts/${post._id}`} />
            ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Europe