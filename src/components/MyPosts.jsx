import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import MemberHeader from './MemberHeader'

////////////////////////////////////////////////////////////////////////////////////////////////
// MyPosts component
// Use - Displays header for members with 2 CTA buttons
//
// props: 
//       - 
//
// components used:
//       - 
////////////////////////////////////////////////////////////////////////////////////////////////

const MyPosts = ({ forumMember, latestPosts }) => {

  const emptyPostsArray = []

  return (
    <>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'landing-page'}/>
      <div className="container">
      <MemberHeader headingText={`Hi SOME PERSONS NAME, welcome to the forum`}
        bodyText={"All your latest posts are displayed below"} 
        btn1Text={'View All My Posts'}
        btn2Text={'Create a Post'}
        showBtn1  showBtn2
      />
      <div className="row g-3">
        {latestPosts.length > 0
          ? latestPosts.map((post, idx) => (
              <PreviewCard key ={idx} post={post}  />
            ))
          : <MemberHeader headingText={"You havn't made any posts yet."}
              bodyText={"Click the Create a Post button above to make your first post to the forum."} 
            />
        }
      </div>
          
      </div>
    </>
  )
}

export default MyPosts