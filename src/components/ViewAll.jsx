import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// ViewAll component
// Use - Displays all the posts on the forum from every category
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//       - allPosts - an array of posts fetched from the database
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - Header, CTA button to view all posts for this category
//       - Map over allPosts array and render a preview card for each post
//       - footer

////////////////////////////////////////////////////////////////////////////////////////////////

const ViewAll = ({ forumMember, allPosts }) => {

  const emptyPostsArray = []

  return (
    <>
    {forumMember ? <MemberNavBar /> : <NavBar />}
    <HeroImage  heroClass={'view-all'}/>
      <div className="container">
        <Header headingText={"Browse the entire Forum"} bodyText={"This is a little blurb about being able to view all the forum posts...r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q...... "}/>
        <div className="row g-3">
        {allPosts.length > 0
              ? allPosts.map((post, idx) => (
                <PreviewCard post={post}  />
              ))
              : forumMember
                  ? <Header headingText={"Much empty..."} 
                    bodyText={"The Europe travel forum currently has no posts, Click below to be the first"} 
                    showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/create"} />
                  : <Header headingText={"Much empty..."} 
                  bodyText={"The Europe travel forum currently has no posts, register today to be the first to contribute."}
                    showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />
            }
          {/* {allPosts.map((post, idx) => (
              <PreviewCard post={post}  />
          ))} */}
        </div>
      </div>
      <Footer />
  </>
  )
}

export default ViewAll