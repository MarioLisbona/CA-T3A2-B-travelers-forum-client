import React from 'react'
import HeroImage from './HeroImage'
import PreviewCard from './PreviewCard'
import Header from './Header'
import MemberHeader from './MemberHeader'

const MyPosts = ({ latestPosts, loggedInMember, forumMember }) => {

// filter all posts to just ones created by the member logged in
  const myPosts = latestPosts.filter(post => post.author._id == loggedInMember.id)

  return (
    <>
      {/* rednering a page with only 8 preview cards */}
      <HeroImage heroClass={'landing-page'}/>
      <div className="container">
        {forumMember 
            ? <MemberHeader headingText={`Hi ${loggedInMember.username}, welcome to the forum`}
                bodyText={"A blurb about how cool the forum is etc"} 
                btn1Text={'My Posts'}
                btn2Text={'Create a Post'}
                showBtn1
                showBtn2
              />
            : <Header headingText={"Welcome to the Traveller's Forum"}
                bodyText={"A blurb about how cool the forum is etc and prompt the guest to register to receive member benefits or just login to use the forum"} 
                btn1Text={'Register'}
                showBtn1
                btn1ToPage={"/register"}
                btn2Text={'Login'}
                showBtn2
                btn2ToPage={"/login"}
              />
          }
        <div className="row g-3">
          {myPosts.length > 0
            ? myPosts.map((post, idx) => (
                <PreviewCard key ={idx} post={post} editDelete  />
              ))
            : <Header 
                headingText={
                  forumMember 
                    ? "You havn't made any posts yet." 
                    : "Sign up or Login"
                }
                bodyText={
                  forumMember 
                    ? "Click the Create a Post button above to make your first post to the forum."
                    : "Click the Login or Register button above to become a use the forum"
                } 
              />
          }
        </div>
      </div>
    </>
  )
}

export default MyPosts