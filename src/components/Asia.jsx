import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'

const Asia = ({ forumMember, asiaPosts }) => {

  return (
    <>
      {/* conditionally render navbar for guest and member */}
      {/* Heroimage */}
      <HeroImage heroClass={'asia'}/>
        {/* container for main body of the page */}
        <div className="container">
          <Header 
            headingText={"Welcome to the Asian Continent!"}
            bodyText={"Asia is the largest of the world’s continents, covering approximately 30 percent of the Earth’s land area. It is also the world’s most populous continent, with roughly 60 percent of the total population. Asia makes up the eastern portion of the Eurasian supercontinent; Europe occupies the western portion. The border between the two continents is debated. However, most geographers define Asia’s western border as an indirect line that follows the Ural Mountains, the Caucasus Mountains, and the Caspian and Black Seas. Asia is bordered by the Arctic, Pacific, and Indian Oceans.Asia’s physical geography, environment and resources, and human geography can be considered separately. Asia can be divided into five major physical regions: mountain systems; plateaus; plains, steppes, and deserts; freshwater environments; and saltwater environments."}
          />
          <div className="row g-3">
            {/* If asiaPosts has objects then map over the array and render a preview card for each post
            and pass in the post object */}
            {asiaPosts.length > 0
              ? asiaPosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post}  />
              ))
              // If asiaPosts is an empty array then render a message for guest and one for member
              // guest message will prompt to register to make a post with CTA button
              // member message will prompt to make a post with CTA button
              : <Header headingText={"Much empty..."}
                bodyText={
                  forumMember
                  ? "The Asia travel forum currently has no posts, Click below to be the first"
                  : "The Asia travel forum currently has no posts, register today to be the first to contribute."
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

export default Asia