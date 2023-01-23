import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// Asia component
// Use - Displays information about Asia and the 8 latest Asia posts displayed in preview cards
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//       - asiaPosts - an array of posts filtered from the fetch at /posts
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Map over asiaPosts array and render a preview card for each post
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

const Asia = ({ forumMember, asiaPosts }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'asia'}/>
        <div className="container">
          <Header headingText={"Welcome to the Asian Continent!"} btnText={'View all Asia Posts'} showBtn />
          <div className="row g-3">
            {asiaPosts.map((post, idx) => (
              <PreviewCard post={post}  />
            ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Asia