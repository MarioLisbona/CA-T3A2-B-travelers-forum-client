import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// Antarctica component
// Use - Displays information about Antarctica and the 8 latest Antarctica posts displayed in preview cards
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//       - antarcticaPosts - an array of posts filtered from the fetch at /posts
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Map over antarcticaPosts array and render a preview card for each post
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

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