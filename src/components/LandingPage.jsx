import React, { useEffect, useState } from "react";
import HeroImage from "./HeroImage";
import Header from "./Header";
import PreviewCard from "./PreviewCard";
import MemberHeader from "./MemberHeader";
import { fetchPosts } from "../functions";

const LandingPage = ({ forumMember, posts, loggedInMember, setPosts }) => {
  const [isfetching, setIsFetching] = useState(true);

  useEffect(() => {
    console.log("isfetching", isfetching);
    // fetching the posts on mount only
    // This means that new posts by other users will show every time this component is mounted
    fetchPosts(setPosts);
    setIsFetching(false);
  }, []);

  return (
    <>
      <HeroImage heroClass={"landing-page"} />
      <div className="container">
        {/* conditionally render a message for member and guest */}
        {forumMember ? (
          <MemberHeader
            headingText={`Hi ${loggedInMember.username}, welcome to the forum`}
            bodyText={"A blurb about how cool the forum is etc"}
            btn1Text={"My Posts"}
            btn2Text={"Create a Post"}
            showBtn1
            showBtn2
          />
        ) : (
          <Header
            headingText={"Welcome to the Traveller's Forum"}
            bodyText={
              "A blurb about how cool the forum is etc and prompt the guest to register to receive member benefits or just login to use the forum"
            }
            btn1Text={"Register"}
            showBtn1
            btn1ToPage={"/register"}
            btn2Text={"Login"}
            showBtn2
            btn2ToPage={"/login"}
          />
        )}
        {/* render 8 latest preview cards */}
        <div className="row g-3">
          <h2>See the latest Posts</h2>
          {isfetching ? (
            <div class="d-flex justify-content-center">
              <div class="spinner-grow" role="status">
                <span class="sr-only"></span>
              </div>
            </div>
          ) : posts.length > 0 ? (
            posts.map((post, idx) =>
              idx < 8 ? <PreviewCard key={idx} post={post} /> : ""
            )
          ) : // conditionally render message for guest and member
          forumMember ? (
            <Header
              headingText={"Much empty..."}
              bodyText={
                "The travel forum currently has no posts. Click the Create a Post button above to be the first to contribute."
              }
            />
          ) : (
            <Header
              headingText={"Much empty..."}
              bodyText={
                "The travel forum currently has no posts. Click the Register button above to become a member and be the first to contribute."
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
