import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const Europe = ({ forumMember, europePosts }) => {

  return (
    <>
      <HeroImage heroClass={'europe'} />
        <div className="container">
          <Header headingText={"Welcome to the Europe!"} 
            bodyText={"This is a little blurb about Europe. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "} 
          />
          <div className="row g-3">
            {europePosts.length > 0
              ? europePosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post}  />
              ))
              : forumMember
                  ? <Header headingText={"Much empty..."} 
                    bodyText={"The Europe travel forum currently has no posts, Click below to be the first"} 
                    showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/create"} />
                  : <Header headingText={"Much empty..."} 
                  bodyText={"The Europe travel forum currently has no posts, register today to be the first to contribute."}
                    showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />
            }
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Europe