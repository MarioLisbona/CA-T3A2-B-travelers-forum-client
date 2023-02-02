import React, { useEffect } from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import { fetchPosts } from '../functions'

const Australia = ({ forumMember, posts, setPosts, URI }) => {

  useEffect(() => {
    // fetching the posts on mount only
    // This means that new posts by other users will show every time this component is mounted
    fetchPosts(setPosts, URI)
  }, [])

  const australiaPosts = posts.filter(post => post.category == 'Australia')
  return (
    <>
      {/* Heroimage */}
      <HeroImage heroClass={'australia'} />
        <div className="container">
          <Header 
            headingText={"Welcome to the Australia!"}
            bodyText={
              <>
                <p>Australia is the only country in the world that covers an entire continent. It is one of the largest countries on Earth. Although it is rich in natural resources and has a lot of fertile land, more than one-third of Australia is desert.</p>
                <p>Most Australian cities and farms are located in the southwest and southeast, where the climate is more comfortable. There are dense rain forests in the northeast. The famous outback (remote rural areas) contains the country's largest deserts, where there are scorching temperatures, little water, and almost no vegetation.</p>
                <p>Running around the eastern and southeastern edge of Australia is the Great Dividing Range. This 2,300-mile (3,700-kilometer) stretch of mountain sends water down into Australia's most important rivers and the Great Artesian Basin, the largest groundwater source in the world.</p>
              </>
            }
          />
          {/* container for main body of the page */}
          <div className="row g-3">
            {/* If australiaPosts has objects then map over the array and render a preview card for each post
            and pass in the post object */}
            {australiaPosts.length > 0
              ? australiaPosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post}  />
              ))
              // If australiaPosts is an empty array then render a message for guest and one for member
              // guest message will prompt to register to make a post with CTA button
              // member message will prompt to make a post with CTA button
              : <Header headingText={"Much empty..."}
                bodyText={
                  forumMember
                  ? "The Australian travel forum currently has no posts, Click below to be the first"
                  : "The Australian travel forum currently has no posts, register today to be the first to contribute."
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

export default Australia