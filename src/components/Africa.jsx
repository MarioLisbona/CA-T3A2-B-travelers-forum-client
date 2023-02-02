import React, { useEffect } from 'react'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import { fetchPosts } from '../functions'

const Africa = ({ forumMember, posts, setPosts, URI }) => {

  useEffect(() => {
    // fetching the posts on mount only
    // This means that new posts by other users will show every time this component is mounted
    fetchPosts(setPosts, URI)
    console.log('inside useEffect in Africa')
  }, [])

  // filtering AfricaPosts from the latest fetched posts
  const africaPosts = posts.filter(post => post.category == 'Africa')

  return (
    <>
      {/* Heroimage */}
      <HeroImage heroClass={'acirfa'}/>
      {/* container for main body of the page */}
      <div className="container">
        <Header 
          headingText={"Welcome to the African Continent!"} 
          bodyText={
          <>
            <p>Africa, the second largest continent, is bounded by the Mediterranean Sea, the Red Sea, the Indian Ocean, and the Atlantic Ocean. It is divided almost equally in half by the Equator.</p>
            <p>Africa's physical geography, environment and resources, and human geography can be considered separately.</p>
            <p>Africa has eight major physical regions: the Sahara, the Sahel, the Ethiopian Highlands, the savanna, the Swahili Coast, the rainforest, the African Great Lakes, and southern Africa. Some of these regions cover large bands of the continent, such as the Sahara and Sahel, while others are isolated areas, such as the Ethiopian Highlands and the Great Lakes. Each of these regions has unique animal and plant communities.</p>
          </>
        }
        />
        <div className="row g-3">
          {/* If africaPosts has objects then map over the array and render a preview card for each post
          and pass in the post object */}
          {africaPosts.length > 0
            ? africaPosts.map((post, idx) => (
              <PreviewCard key ={idx} post={post}  />
            ))
            // If africaPosts is an empty array then render a message for guest and one for member
            // guest message will prompt to register to make a post with CTA button
            // member message will prompt to make a post with CTA button
            : <Header headingText={"Much empty..."}
                bodyText={
                  forumMember
                   ? "The Africa travel forum currently has no posts, Click below to be the first"
                   : "The Africa travel forum currently has no posts, register today to be the first to contribute."
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

export default Africa