import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// Africa component
// Use - Displays information about Africa and the 8 latest Africa posts displayed in preview cards
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//       - africaPosts - an array of posts filtered from the fetch at /posts
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Map over africaPosts array and render a preview card for each post
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

const Africa = ({ forumMember, africaPosts }) => {
  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'acirfa'}/>
        <div className="container">
          <Header headingText={"Welcome to the African Continent!"} btnText={'View all Africa Posts'} showBtn  />
          <div className="row g-3">
            {africaPosts.length > 0
              ? africaPosts.map((post, idx) => (
                <PreviewCard post={post}  />
              ))
              : <h1>There are not posts in this forum</h1>
            }
            {/* {africaPosts.map((post, idx) => (
              <PreviewCard post={post}  />
            ))} */}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Africa