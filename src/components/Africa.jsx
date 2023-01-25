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

  const emptyPostsArray = []
  return (
    <>
      {/* conditionally render navbar for guest and member */}
      {forumMember ? <MemberNavBar /> : <NavBar />}
      {/* Heroimage */}
      <HeroImage heroClass={'acirfa'}/>
      {/* container for main body of the page */}
      <div className="container">
        <Header headingText={"Welcome to the African Continent!"} 
          bodyText={"This is a little blurb about the african content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "}
        />
        <div className="row g-3">
          {/* If africaPosts has objects then map over the array and render a preview card for each post
          and pass in the post object */}
          {emptyPostsArray.length > 0
            ? africaPosts.map((post, idx) => (
              <PreviewCard key ={idx} post={post}  />
            ))
            // If africaPosts is an empty array then render a message for guest and one for member
            // guest message will prompt to register to make a post with CTA button
            // member message will prompt to make a post with CTA button
            : <Header headingText={"Much empty..."}
                bodyText={
                  forumMember
                   ? "The Africa travel forum currently has no posts, Click below to be the first"
                   : "The Africa travel forum currently has no posts, register today to be the first to contribute."
                }
                showBtn1
                btn1Text={
                  forumMember
                    ? "Add a post"
                    : "Register"
                }
                btn1ToPage={
                  forumMember
                    ? "/posts/create"
                    : "/register"
                }
              />
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Africa