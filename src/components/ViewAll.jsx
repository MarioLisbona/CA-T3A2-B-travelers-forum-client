import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'


const ViewAll = ({ forumMember, allPosts }) => {

  return (
    <>
    {forumMember ? <MemberNavBar /> : <NavBar />}
    <HeroImage  heroClass={'view-all'}/>
      <div className="container">
        <Header headingText={"Browse the entire Forum"} btnText={'View all Posts'} showBtn />
        <div className="row g-3">
          {allPosts.map((post, idx) => (
              <PreviewCard post={post} toPage={`/posts/${post._id}`} />
          ))}
        </div>
      </div>
      <Footer />
  </>
  )
}

export default ViewAll