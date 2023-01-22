import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const SthAmerica = ({ forumMember, sthAmericaPosts }) => {
  return (
    <>
    {forumMember ? <MemberNavBar /> : <NavBar />}
    <HeroImage heroClass={'s-am'} />
      <div className="container">
        <Header headingText={"Welcome to South America"} btnText={'View all South America Posts'} showBtn />
        <div className="row g-3">
          {sthAmericaPosts.map((post, idx) => (
            <PreviewCard post={post} toPage={`/posts/${post._id}`} />
          ))}
        </div>
      </div>
      <Footer />
  </>
  )
}

export default SthAmerica