import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const Antarctica = ({ forumMember, antarcticaPosts }) => {

  return (
    <>
      <HeroImage heroClass={'antarctica'} />
      {/* container for main body of the page */}
        <div className="container">
          <Header headingText={"Welcome to the Antarctica!"}
            bodyText={"This is a little blurb about Antarctica. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "} />
          <div className="row g-3">
            {/* If antarctica has objects then map over the array and render a preview card for each post
            and pass in the post object */}
            {antarcticaPosts.length > 0
                ? antarcticaPosts.map((post, idx) => (
                  <PreviewCard key ={idx} post={post}  />
                ))// If antarctaPosts is an empty array then render a message for guest and one for member
                // guest message will prompt to register to make a post with CTA button
                // member message will prompt to make a post with CTA button
                : <Header headingText={"Much empty..."}
                    bodyText={
                      forumMember
                       ? "The Antarctica travel forum currently has no posts, Click below to be the first"
                       : "The Antarctica travel forum currently has no posts, register today to be the first to contribute."
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

export default Antarctica