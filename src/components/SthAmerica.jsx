import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const SthAmerica = ({ forumMember, sthAmericaPosts }) => {

  return (
    <>
    {/* Heroimage */}
    <HeroImage heroClass={'s-am'} />
      <div className="container">
        <Header 
          headingText={"Welcome to South America"}
          bodyText={"This is a little blurb about South America. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "} 
        />
        {/* container for main body of the page */}
        <div className="row g-3">
        {/* If sthAmericaPosts has objects then map over the array and render a preview card for each post
        and pass in the post object */}
        {sthAmericaPosts.length > 0
              ? sthAmericaPosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post}  />
              ))
              // If sthAmericaPosts is an empty array then render a message for guest and one for member
              // guest message will prompt to register to make a post with CTA button
              // member message will prompt to make a post with CTA button
              : forumMember
                  ? <Header headingText={"Much empty..."} 
                    bodyText={"The North American travel forum currently has no posts, Click below to be the first"} 
                    showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/new"} />
                  : <Header headingText={"Much empty..."} 
                  bodyText={"The North American travel forum currently has no posts, register today to be the first to contribute."}
                    showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />
            }
        </div>
      </div>
  </>
  )
}

export default SthAmerica