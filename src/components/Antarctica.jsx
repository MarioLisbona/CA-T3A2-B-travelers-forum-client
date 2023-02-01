import React, { useEffect } from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import { fetchPosts } from '../functions'

const Antarctica = ({ forumMember, posts, setPosts, URI }) => {

  useEffect(() => {
    // fetching the posts on mount only
    // This means that new posts by other users will show every time this component is mounted
    fetchPosts(setPosts, URI)
    console.log('inside useEffect in Antarctica')
  }, [])

  const antarcticaPosts = posts.filter(post => post.category == 'Antarctica')

  return (
    <>
      <HeroImage heroClass={'antarctica'} />
      {/* container for main body of the page */}
        <div className="container">
          <Header 
            headingText={"Welcome to the Antarctica!"}
            bodyText={
              <>
              <p>Antarctica, the world’s southernmost and fifth largest continent. Its landmass is almost wholly covered by a vast ice sheet.</p>
              <p>Often described as a continent of superlatives, Antarctica is not only the world’s southernmost continent. It is also the world’s highest, driest, windiest, coldest, and iciest continent. Antarctica is about 5.5 million square miles (14.2 million square km) in size, and thick ice covers about 98 percent of the land. The continent is divided into East Antarctica (which is largely composed of a high ice-covered plateau) and West Antarctica (which is largely an ice sheet covering an archipelago of mountainous islands).</p>
              <p>Lying almost concentrically around the South Pole, Antarctica’s name means “opposite to the Arctic.” It would be essentially circular except for the outflaring Antarctic Peninsula, which reaches toward the southern tip of South America (some 600 miles [970 km] away), and for two principal embayments, the Ross Sea and the Weddell Sea. These deep embayments of the Southern Ocean make the continent somewhat pear-shaped, dividing it into two unequal-sized parts. East Antarctica lies mostly in the east longitudes and is larger than West Antarctica, which lies wholly in the west longitudes. East and West Antarctica are separated by the approximately 2,100-mile- (about 3,400-km-) long Transantarctic Mountains.</p>
              </>
            }
          />
          <div className="row g-3">
            {/* If antarctica has objects then map over the array and render a preview card for each post
            and pass in the post object */}
            {antarcticaPosts.length > 0
                ? antarcticaPosts.map((post, idx) => (
                  <PreviewCard key ={idx} post={post}  />
                ))// If antarctaPosts is an empty array then render a message for guest and one for member
                // guest message will prompt to register to make a post with CTA button
                // member message will prompt to make a post with CTA button
                : <Header headingText={"Much empty..."}
                    bodyText={
                      forumMember
                       ? "The Antarctica travel forum currently has no posts, Click below to be the first"
                       : "The Antarctica travel forum currently has no posts, register today to be the first to contribute."
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

export default Antarctica