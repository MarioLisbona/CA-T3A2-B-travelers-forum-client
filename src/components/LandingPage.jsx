import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

const LandingPage = ({ forumMember }) => {

	return (
		<>
      {forumMember ? <MemberNavBar /> : <NavBar />}
      <HeroImage heroClass={'landing-page'} />
        <div className="container">
          <Header headingText={"Welcome to the Traveler's Forum"} btnText={'Register'} showBtn/>
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