import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// Europe component
// Use - Displays information about Europe and the 8 latest Europe posts displayed in preview cards
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//       - europePosts - an array of posts filtered from the fetch at /posts
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Map over europePosts array and render a preview card for each post
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

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
              <PreviewCard post={post} />
            ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Europe