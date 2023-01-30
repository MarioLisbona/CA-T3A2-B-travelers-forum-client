import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'

const Australia = ({ forumMember, australiaPosts }) => {

  return (
    <>
      {/* Heroimage */}
      <HeroImage heroClass={'australia'} />
        <div className="container">
          <Header 
            headingText={"Welcome to the Australia!"}
            bodyText={"This is a little blurb about Australia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "}
          />
          {/* container for main body of the page */}
          <div className="row g-3">
            {/* If australiaPosts has objects then map over the array and render a preview card for each post
            and pass in the post object */}
            {australiaPosts.length > 0
              ? australiaPosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post}  />
              ))
              // If australiaPosts is an empty array then render a message for guest and one for member
              // guest message will prompt to register to make a post with CTA button
              // member message will prompt to make a post with CTA button
              : <Header headingText={"Much empty..."}
                bodyText={
                  forumMember
                  ? "The Australian travel forum currently has no posts, Click below to be the first"
                  : "The Australian travel forum currently has no posts, register today to be the first to contribute."
                }
                showBtn1
                btn1Text={
                  forumMember
                    ? "Add a post"
                    : "Register"
                }
                btn1ToPage={
                  forumMember
                    ? "/posts/new"
                    : "/register"
                }
              />
            }
          </div>
        </div>
    </>
  )
}

export default Australia