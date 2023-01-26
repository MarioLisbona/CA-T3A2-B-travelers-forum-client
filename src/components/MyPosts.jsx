import React from 'react'
import HeroImage from './HeroImage'
import PreviewCard from './PreviewCard'
import MemberHeader from './MemberHeader'

const MyPosts = ({ latestPosts, loggedInMember }) => {

  console.log(latestPosts[0].author._id)
  console.log(loggedInMember.id)

  const myPosts = latestPosts.filter(post => post.author._id == loggedInMember.id)
  console.log(myPosts)

  return (
    <>
      <HeroImage heroClass={'landing-page'}/>
      <div className="container">
      <MemberHeader headingText={`Hi ${loggedInMember.username}, welcome to the forum`}
        bodyText={"All your posts are displayed below"} 
        btn1Text={'Create a Post'}
        showBtn1
        btn1ToPage={'/create/'}
      />
      <div className="row g-3">
        {myPosts.length > 0
          ? myPosts.map((post, idx) => (
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