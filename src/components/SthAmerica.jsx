import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// South America component
// Use - Displays information about South America and the 8 latest South America posts displayed in preview cards
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//       - sthAmericaPosts - an array of posts filtered from the fetch at /posts
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Map over sthAmericaPosts array and render a preview card for each post
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

const SthAmerica = ({ forumMember, sthAmericaPosts }) => {
  return (
    <>
    {forumMember ? <MemberNavBar /> : <NavBar />}
    <HeroImage heroClass={'s-am'} />
      <div className="container">
        <Header headingText={"Welcome to South America"} btnText={'View all South America Posts'} showBtn />
        <div className="row g-3">
          {sthAmericaPosts.map((post, idx) => (
            <PreviewCard post={post} />
          ))}
        </div>
      </div>
      <Footer />
  </>
  )
}

export default SthAmerica