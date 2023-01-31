import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'

const NthAmerica = ({ forumMember, nthAmericaPosts }) => {

  return (
    <>
      {/* Heroimage */}
      <HeroImage heroClass={'n-am'} />
        <div className="container">
          <Header 
            headingText={"Welcome to the North America!"}
            bodyText={
              <>
                <p>North America, the third-largest continent, extends from the tiny Aleutian Islands in the northwest to the Isthmus of Panama in the south. The continent includes the enormous island of Greenland in the northeast and the small island countries and territories that dot the Caribbean Sea and western North Atlantic Ocean. In the far north, the continent stretches halfway around the world, from Greenland to the Aleutians. But at Panama’s narrowest part, the continent is just 50 kilometers (31 miles) across.</p>
                <p>North America can be divided into five physical regions: the mountainous west, the Great Plains, the Canadian Shield, the varied eastern region, and the Caribbean. Mexico and Central America’s western coast are connected to the mountainous west, while its lowlands and coastal plains extend into the eastern region.</p>
                <p>Within these regions are all the major types of biomes in the world. A biome is a community of animals and plants spreading over an extensive area with a relatively uniform climate. Some diverse biomes represented in North America include desert, grassland, tundra, and coral reefs.</p>
              </>
            } 
          />
          {/* container for main body of the page */}
          <div className="row g-3">
            {/* If nthAmericaPosts has objects then map over the array and render a preview card for each post
            and pass in the post object */}
            {nthAmericaPosts.length > 0
              ? nthAmericaPosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post}  />
              ))
              // If nthAmericaPosts is an empty array then render a message for guest and one for member
              // guest message will prompt to register to make a post with CTA button
              // member message will prompt to make a post with CTA button
              : forumMember
                  ? <Header headingText={"Much empty..."} 
                      bodyText={"The North American travel forum currently has no posts, Click below to be the first"} 
                      showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/new"}
                    />
                  : <Header headingText={"Much empty..."} 
                      bodyText={"The North American travel forum currently has no posts, register today to be the first to contribute."}
                      showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} 
                    />
              }
          </div>
        </div>
    </>
  )
}

export default NthAmerica