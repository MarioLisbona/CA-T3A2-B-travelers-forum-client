import React from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'

const Europe = ({ forumMember, europePosts }) => {

  return (
    <>
      {/* Heroimage */}
      <HeroImage heroClass={'europe'} />
        <div className="container">
          <Header 
            headingText={"Welcome to the Europe!"} 
            bodyText={
              <>
                <p>Europe is the second-smallest continent. The name Europe, or Europa, is believed to be of Greek origin, as it is the name of a princess in Greek mythology. The name Europe may also come from combining the Greek roots eur- (wide) and -op (seeing) to form the phrase “wide-gazing.”</p>
                <p>Europe is often described as a “peninsula of peninsulas.” A peninsula is a piece of land surrounded by water on three sides. Europe is a peninsula of the Eurasian supercontinent and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, and the Mediterranean, Black, and Caspian seas to the south.</p>
                <p>Europe’s main peninsulas are the Iberian, Italian, and Balkan, located in southern Europe, and the Scandinavian and Jutland, located in northern Europe. The link between these peninsulas has made Europe a dominant economic, social, and cultural force throughout recorded history.</p>
                <p>Europe’s physical geography, environment and resources, and human geography can be considered separately.</p>
                <p>Today, Europe is home to the citizens of Albania, Andorra, Austria, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia, Cyprus, the Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Kosovo, Latvia, Liechtenstein, Lithuania, Luxembourg, Macedonia, Malta, Moldova, Monaco, Montenegro, Netherlands, Norway, Poland, Portugal, Romania, Russia, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, Ukraine, the United Kingdom (England, Scotland, Wales, and Northern Ireland), and Vatican City.</p>
              </>
            } 
          />
          {/* container for main body of the page */}
          <div className="row g-3">
            {/* If europePosts has objects then map over the array and render a preview card for each post
            and pass in the post object */}
            {europePosts.length > 0
              ? europePosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post}  />
              ))
              // If europePosts is an empty array then render a message for guest and one for member
              // guest message will prompt to register to make a post with CTA button
              // member message will prompt to make a post with CTA button
              : forumMember
                  ? <Header headingText={"Much empty..."} 
                    bodyText={"The Europe travel forum currently has no posts, Click below to be the first"} 
                    showBtn1 btn1Text={"Add a post"} btn1ToPage={"/posts/new"} />
                  : <Header headingText={"Much empty..."} 
                  bodyText={"The Europe travel forum currently has no posts, register today to be the first to contribute."}
                    showBtn1 btn1Text={"Register"} btn1ToPage={"/register"} />
            }
          </div>
        </div>
    </>
  )
}

export default Europe