import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'

const SthAmerica = ({ forumMember, sthAmericaPosts }) => {

  return (
    <>
    {/* Heroimage */}
    <HeroImage heroClass={'s-am'} />
      <div className="container">
        <Header 
          headingText={"Welcome to South America"}
          bodyText={
            <>
              <p>Within these regions are all the major types of biomes in the world. A biome is a community of animals and plants spreading over an extensive area with a relatively uniform climate. Some diverse biomes represented in North America include desert, grassland, tundra, and coral reefs.</p>
              <p>South America is bounded by the Caribbean Sea to the northwest and north, the Atlantic Ocean to the northeast, east, and southeast, and the Pacific Ocean to the west. In the northwest it is joined to North America by the Isthmus of Panama, a land bridge narrowing to about 50 miles (80 km) at one point. Drake Passage, south of Cape Horn, separates South America from Antarctica.</p>
              <p>Relatively few islands rim the continent, except in the south. These include the glaciated coastal archipelagoes of Argentina and Chile. The Falkland (Malvinas) Islands are east of southern Argentina. To the north, the West Indies stretch from Trinidad to Florida, but those islands usually are associated with North America. Of the remainder, most are small oceanic islands off the coasts of South America, including the Galapagos Islands, Ecuador, in the Pacific Ocean.</p>
            </>
          } 
        />
        {/* container for main body of the page */}
        <div className="row g-3">
        {/* If sthAmericaPosts has objects then map over the array and render a preview card for each post
        and pass in the post object */}
        {sthAmericaPosts.length > 0
              ? sthAmericaPosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post}  />
              ))
              // If sthAmericaPosts is an empty array then render a message for guest and one for member
              // guest message will prompt to register to make a post with CTA button
              // member message will prompt to make a post with CTA button
              : forumMember
                  ? <Header headingText={"Much empty..."} 
                    bodyText={"The North American travel forum currently has no posts, Click below to be the first"} 
                    showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/new"} />
                  : <Header headingText={"Much empty..."} 
                  bodyText={"The North American travel forum currently has no posts, register today to be the first to contribute."}
                    showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />
            }
        </div>
      </div>
  </>
  )
}

export default SthAmerica