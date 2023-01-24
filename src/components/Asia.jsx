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

  const emptyPostsArray = []

  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'asia'}/>
        <div className="container">
          <Header headingText={"Welcome to the Asian Continent!"}
            bodyText={"This is a little blurb about the Asian content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "}
          />
          <div className="row g-3">
            {asiaPosts.length > 0
              ? asiaPosts.map((post, idx) => (
                <PreviewCard post={post}  />
              ))
              : forumMember
                  ? <Header headingText={"Much empty..."} 
                    bodyText={"The Asia travel forum currently has no posts, Click below to be the first"} 
                    showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/create"} />
                  : <Header headingText={"Much empty..."} 
                  bodyText={"The Asia travel forum currently has no posts, register today to be the first to contribute."}
                    showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />
            }
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Asia