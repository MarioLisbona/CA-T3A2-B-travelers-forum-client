import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const Asia = ({ forumMember, asiaPosts }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'asia'}/>
        <div className="container">
          <Header headingText={"Welcome to the Asian Continent!"} btnText={'View all Asia Posts'} showBtn />
          <div className="row g-3">
            {asiaPosts.map((post, idx) => (
              <PreviewCard post={post} toPage={`/posts/${post._id}`} />
            ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Asia