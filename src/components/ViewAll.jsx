import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// ViewAll component
// Use - Displays all the posts on the forum from every category
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//       - allPosts - an array of posts fetched from the database
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Map over allPosts array and render a preview card for each post
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

const ViewAll = ({ forumMember, allPosts }) => {

  return (
    <>
    {forumMember ? <MemberNavBar /> : <NavBar />}
    <HeroImage  heroClass={'view-all'}/>
      <div className="container">
        <Header headingText={"Browse the entire Forum"} btnText={'View all Posts'} showBtn />
        <div className="row g-3">
          {allPosts.map((post, idx) => (
              <PreviewCard post={post}  />
          ))}
        </div>
      </div>
      <Footer />
  </>
  )
}

export default ViewAll