import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// Australia component
// Use - Displays information about Australia and the 8 latest Australia posts displayed in preview cards
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//       - australiaPosts - an array of posts filtered from the fetch at /posts
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Map over australiaPosts array and render a preview card for each post
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

const Australia = ({ forumMember, australiaPosts }) => {
  return (
    <>
     {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'australia'} />
        <div className="container">
          <Header headingText={"Welcome to the Australia!"} btnText={'View all Australia Posts'} showBtn />
          <div className="row g-3">
            {australiaPosts.map((post, idx) => (
              <PreviewCard post={post}  />
            ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Australia