import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import MemberHeader from './MemberHeader'

////////////////////////////////////////////////////////////////////////////////////////////////
// LandingPage component
// Use - Displays a landing page at the root directory
//
// props: 
//       - forumMember - used to conditionally render guest or member navbar
//
// components used:
//       - MemberNavBar and NavBar
//       - Hero image with correct class for images
//       - memberHeader, with 2 CTA buttons to view all users posts and create a post
//       - Header, CTA button to view all posts for this category
//       - footer
////////////////////////////////////////////////////////////////////////////////////////////////

const LandingPage = ({ forumMember, memberName }) => {

  console.log(memberName)

	return (
		<>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'landing-page'} />
        <div className="container">
          {forumMember 
            ? <MemberHeader headingText={`Hi ${memberName[0].username}, welcome to the forum`} btn1Text={'My Posts'} showBtn1 btn2Text={'Create a Post'} showBtn2 />
            : <Header headingText={"Welcome to the Traveler's Forum"} btn1Text={'Register'} showBtn1 /> }
          <div className="row g-3">
          </div>
        </div>
        <Footer />
		</>
	)
}

export default LandingPage