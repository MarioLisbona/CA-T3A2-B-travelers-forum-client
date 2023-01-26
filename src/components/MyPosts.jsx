import React from 'react'
import HeroImage from './HeroImage'
import PreviewCard from './PreviewCard'
import MemberHeader from './MemberHeader'

const MyPosts = ({ latestPosts }) => {

  return (
    <>
      <HeroImage heroClass={'landing-page'}/>
      <div className="container">
      <MemberHeader headingText={`Hi SOME PERSONS NAME, welcome to the forum`}
        bodyText={"All your latest posts are displayed below"} 
        btn1Text={'View All My Posts'}
        btn2Text={'Create a Post'}
        showBtn1  showBtn2
      />
      <div className="row g-3">
        {latestPosts.length > 0
          ? latestPosts.map((post, idx) => (
              <PreviewCard key ={idx} post={post}  />
            ))
          : <MemberHeader headingText={"You havn't made any posts yet."}
              bodyText={"Click the Create a Post button above to make your first post to the forum."} 
            />
        }
      </div>
          
      </div>
    </>
  )
}

export default MyPosts