import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

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
    <HeroImage heroClass={'s-am'} />
      <div className="container">
        <Header headingText={"Welcome to South America"}
          bodyText={"This is a little blurb about South America. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "} 
        />
        <div className="row g-3">
        {sthAmericaPosts.length > 0
              ? sthAmericaPosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post}  />
              ))
              : forumMember
                  ? <Header headingText={"Much empty..."} 
                    bodyText={"The North American travel forum currently has no posts, Click below to be the first"} 
                    showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/create"} />
                  : <Header headingText={"Much empty..."} 
                  bodyText={"The North American travel forum currently has no posts, register today to be the first to contribute."}
                    showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />
            }
        </div>
      </div>
      <Footer />
  </>
  )
}

export default SthAmerica