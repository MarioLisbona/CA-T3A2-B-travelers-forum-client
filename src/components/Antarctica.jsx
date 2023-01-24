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
          <Header headingText={"Welcome to the Antarctica!"}
            bodyText={"This is a little blurb about Antarctica. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "} />
          <div className="row g-3">
            {antarcticaPosts.length > 0
                ? antarcticaPosts.map((post, idx) => (
                  <PreviewCard post={post}  />
                ))
                : forumMember
                    ? <Header headingText={"Much empty..."} 
                      bodyText={"The Antarctica travel forum currently has no posts, Click below to be the first"} 
                      showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/create"} />
                    : <Header headingText={"Much empty..."} 
                    bodyText={"The Antarctica travel forum currently has no posts, register today to be the first to contribute."}
                      showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />

              }
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Antarctica