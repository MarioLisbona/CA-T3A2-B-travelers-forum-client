import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'
import MemberHeader from './MemberHeader'

const LandingPage = ({ forumMember, memberName }) => {

	return (
		<>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'landing-page'} />
        <div className="container">
          {forumMember 
            ? <MemberHeader headingText={`Hi ${memberName}, welcome to the forum`} btn1Text={'My Posts'} showBtn1 btn2Text={'Create a Post'} showBtn2 />
            : <Header headingText={"Welcome to the Traveler's Forum"} btn1Text={'Register'} showBtn1 /> }
          <div className="row g-3">
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
          </div>
        </div>
        <Footer />
		</>
	)
}

export default LandingPage