import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const ViewAll = ({ forumMember, allPosts }) => {

  return (
    <>
    <HeroImage  heroClass={'view-all'}/>
      <div className="container">
        <Header headingText={"Browse the entire Forum"} bodyText={"This is a little blurb about being able to view all the forum posts...r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "}/>
        <div className="row g-3">
          {allPosts.length > 0
                ? allPosts.map((post, idx) => (
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

export default ViewAll