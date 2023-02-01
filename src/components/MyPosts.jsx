import React from 'react'
import HeroImage from './HeroImage'
import PreviewCard from './PreviewCard'
import Header from './Header'

const MyPosts = ({ latestPosts, loggedInMember }) => {

// filter all posts to just ones created by the member logged in
  const myPosts = latestPosts.filter(post => post.author._id == loggedInMember.id)

  return (
    <>
      {/* rednering a page with only 8 preview cards */}
      <HeroImage heroClass={'landing-page'}/>
      <div className="container">
      <Header headingText={typeof loggedInMember.username === 'undefined' ? "Welcome to the Traveler's Forum" : `Hi ${loggedInMember.username}, welcome to the forum`}
        bodyText={"All your posts are displayed below"} 
        btn1Text={'Create a Post'}
        showBtn1
        btn1ToPage={'/posts/new'}
      />
      <div className="row g-3">
        {myPosts.length > 0
          ? myPosts.map((post, idx) => (
              <PreviewCard key ={idx} post={post} editDelete  />
            ))
          : <Header headingText={"You havn't made any posts yet."}
              bodyText={"Click the Create a Post button above to make your first post to the forum."} 
            />
        }
      </div>
          
      </div>
    </>
  )
}

export default MyPosts