import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// North America component
// Use - Displays information about North America and the 8 latest North America posts displayed in preview cards
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//       - nthAmericaPosts - an array of posts filtered from the fetch at /posts
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Map over nthAmericaPosts array and render a preview card for each post
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

const NthAmerica = ({ forumMember, nthAmericaPosts }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'n-am'} />
        <div className="container">
          <Header headingText={"Welcome to the North America!"} btnText={'View all North America Posts'} showBtn />
          <div className="row g-3">
            {nthAmericaPosts.map((post, idx) => (
              <PreviewCard post={post} />
            ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default NthAmerica