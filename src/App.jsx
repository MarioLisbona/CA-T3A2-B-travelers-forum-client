import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import ViewAll from "./components/ViewAll";
import Asia from "./components/Asia";
import Africa from "./components/Africa";
import NthAmerica from "./components/NthAmerica";
import SthAmerica from "./components/SthAmerica";
import Antarctica from "./components/Antarctica";
import Europe from "./components/Europe";
import Australia from "./components/Australia";
import About from "./components/About";
import Contact from "./components/Contact";
import TermsOfUse from "./components/TermsOfUse";
import Privacy from "./components/Privacy";
import "./HeroImage.css";
import MyPosts from "./components/MyPosts";
import CreateAPost from "./components/CreateAPost";
import FullPagePost from "./components/FullPagePost";
import PageNotFound from "./components/PageNotFound";
import MemberNavBar from "./components/MemberNavBar";
import SearchingForPost from "./components/SearchingForPost";

import { fetchMember, fetchPosts } from "./functions";
import ModalJwtExpired from "./components/ModalJwtExpired";

const App = () => {
  // navigate to pages from within a function
  const nav = useNavigate();

  // state variable for memberHasRated - stores the id's of posts that a user has already rated
  const [memberHasRated, setMemberHasRated] = useState([]);

  // state variable to track and store all posts
  const [posts, setPosts] = useState([]);
  // tracking the state of posts in each category
  const [asiaPosts, setAsiaPosts] = useState([]);
  const [africaPosts, setAfricaPosts] = useState([]);
  const [northAmericaPosts, setNorthAmericaPosts] = useState([]);
  const [southAmericaPosts, setSouthAmericaPosts] = useState([]);
  const [antarcticaPosts, setAntarcticaPosts] = useState([]);
  const [europePosts, setEuropePosts] = useState([]);
  const [australiaPosts, setAustraliaPosts] = useState([]);

  // boolean used  with forumMember for testing conditional rendering of guest and member elements
  // track state of the logged in member
  const [forumMember, setForumMember] = useState(false);
  const [loggedInMember, setLoggedInMember] = useState({});

  // controls messages and when to show modal for registration success/failure
  const [regSuccess, setRegSuccess] = useState(false);
  const [regMessage, setRegMessage] = useState("");

  // controls messages and when to show modal for registration success/failure
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  // used to prepopulate the login username input after successful registration
  const [loginInput, setLoginInput] = useState("");

  // create currentUser Object from values in session storage
  const currentUser = {
    username: sessionStorage.getItem("username"),
    id: sessionStorage.getItem("id"),
    token: sessionStorage.getItem("token"),
  };

  // couldnt manage to regirect to /login  with a <Link> inside registration form so did it here
  function redirect() {
    nav("/login");
    setRegMessage("");
  }

  // function to redirect after Modal closes
  function redirectFunction(url) {
    nav(url);
  }

  // reset state if user registration fails
  function regFormResetState() {
    setRegMessage("");
    setRegSuccess(false);
  }

  // reset state if user login fails
  function loginFormResetState() {
    setLoginMessage("");
    setLoginSuccess(false);
  }

  // If the user has viewed a post before clicking the login or register/login forms
  // that post id will be stored in session storage.
  // Once the user has successfully logged in, they will be returned to the last post they were reading.
  // Otherwise they have logged in from the landing page so will be redirected to that.
  function loginRedirect(sessionStorage) {
    if (sessionStorage.postId) {
      // reset login username input field
      setLoginInput("");
      nav(`/posts/${sessionStorage.postId}`);
    } else {
      nav("/");
    }
  }

  // on mount and tracking setForumMember changes - if the there is session storage data stored on the current user
  // set logged in member to currentUser object
  // set forumMember to true for conditional rendering
  useEffect(() => {
    if (currentUser.token) {
      setLoggedInMember(currentUser);
      setForumMember(true);
    }
  }, [setForumMember]);

  // fetch all the posts from the API on component on mount only and assign to posts with sePosts()
  // may need to change this to trigger and track the posts state
  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  // Higher Order Function to display a full page post from the link in the preview cards
  // uses id param passed in from preview card button to filter posts array to find the correct post object
  // FullPagePost component is passed the post array with a single post object, forumMember for conditional rendering
  // loggedInMember object and functions to edit & delete posts from the database. Submit, edit and delete comments from the database
  const ShowPostWrapper = () => {
    const { id } = useParams();
    const post = posts.filter((post) => post._id == id);

    return post == 0 ? (
      <SearchingForPost forumMember={forumMember} />
    ) : (
      <FullPagePost
        post={post}
        forumMember={forumMember}
        loggedInMember={loggedInMember}
        editPost={editPost}
        deletePost={deletePost}
        submitComment={submitComment}
        editComment={editComment}
        deleteComment={deleteComment}
        ratePost={ratePost}
        memberHasRated={memberHasRated}
      />
    );
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         createMember function       /////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // async function - is called when the register form is submitted
  const createMember = async (user, pwd) => {
    try {
      // create object to store Register form data that will be posted to db
      const newMember = {
        username: user,
        password: pwd,
      };

      // post the new member to the API and assign the return object to returnedMember
      const returnedMember = await fetch(
        "https://tf-server-788f837b6e19.herokuapp.com/auth/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMember),
        }
      );

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedMember.json();

      // if there is no error message registration successful
      if (!returnedObject.error) {
        // used for conditional logic in modal
        setRegMessage("Registration Successful");
        setRegSuccess(true);
        // prepopulate the login input if succesfull
        setLoginInput(returnedObject.username);
      } else {
        // used for conditional logic in modal
        setRegMessage(`Registration failed - ${returnedObject.error}`);
        setRegSuccess(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         loginMember function       //////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // async function - is called when the login form is submitted
  const loginMember = async (username, password) => {
    try {
      // create object to store login form data that will be posted to db
      const memberToLogin = {
        username: username,
        password: password,
      };

      // post the new memberToLogin object to the API and assign the return object to returnedMember
      const returnedMember = await fetch(
        "https://tf-server-788f837b6e19.herokuapp.com/auth/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(memberToLogin),
        }
      );

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedMember.json();

      // The user has supplied valid login credentials
      if (returnedObject.id) {
        // used for conditional logic in modal
        setLoginMessage("Login Successful");
        setLoginSuccess(true);

        // assigning the returned object to session storage keys
        sessionStorage.setItem("username", returnedObject.username);
        sessionStorage.setItem("id", returnedObject.id);
        sessionStorage.setItem("token", returnedObject.token);

        // forumMember is logged in for conditional rendering
        setForumMember(true);

        // set logged in member details
        // may be unnecessary repitition here????????????
        setLoggedInMember({
          username: returnedObject.username,
          id: returnedObject.id,
          token: returnedObject.token,
        });

        // fetch the member data from the api, using the returned object from login POST
        // this will fetch an array of posts that the user has already rated
        // conditional rendering is then used to remove the rating button if the user has already rated the post
        fetchMember(setMemberHasRated, returnedObject.id);

        // call redirect function to redirect to login page after successful user registration
        loginRedirect(sessionStorage);

        // login details are incorrect
        // need to render a modal here with error message
      } else {
        // used for conditional logic in modal
        setLoginMessage(`Login failed - ${returnedObject.error}`);
        setLoginSuccess(false);

        // reset login username input field
        setLoginInput("");
        nav("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         logoutMember function       /////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // logs out the member
  function logoutMember() {
    // for conditional rendering
    setForumMember(false);
    // clear session storage
    sessionStorage.clear();
    // set logged in member details to empty object
    setLoggedInMember({});

    // reset login username input
    setLoginInput("");

    // setting the state when user logs out
    setLoginMessage("");
    setLoginSuccess(false);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         submitPost function       ///////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // async function - is called when the create a post form is submitted
  const submitPost = async (title, continent, postContent) => {
    try {
      // create object to receive create post form data
      const newPost = {
        author: loggedInMember.id,
        title: title,
        category: continent,
        content: postContent,
      };

      // post the new newPost object to the API and assign the return object to returnedPost
      const returnedPost = await fetch(
        "https://tf-server-788f837b6e19.herokuapp.com/posts/new",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + sessionStorage.token,
          },
          body: JSON.stringify(newPost),
        }
      );

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedPost.json();

      // If JWT lost after login but before form submit
      if (returnedPost.status === 403) {
        logoutMember();
        nav("/jwt-expired");
        // JWT valid
      } else {
        // add the newly created post to the start of the posts array
        posts.unshift(returnedObject);
        setPosts(posts);

        // navigate to the new post in full page post
        nav(`/posts/${returnedObject._id}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         editPost function       ///////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // async function - is called when a users post is edited
  const editPost = async (post, title, continent, postContent) => {
    try {
      // create object to receive edit post form data
      const editedPost = {
        title: title,
        category: continent,
        content: postContent,
      };

      // PUT the new editPost object to the API and assign the return object to returnedPost
      const returnedPost = await fetch(
        `https://tf-server-788f837b6e19.herokuapp.com/posts/${post[0]._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + sessionStorage.token,
          },
          body: JSON.stringify(editedPost),
        }
      );

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedPost.json();

      if (returnedPost.status === 403) {
        logoutMember();
        nav("/jwt-expired");
      } else {
        // assigning id of current post to targetPostId - this wont work with post[0]._id inside the findIndex() method
        const targetPostId = post[0]._id;
        // using targetPostId to find the post that has just been edited in the array of posts fetched from the server
        const postIndex = posts.findIndex((post) => targetPostId == post._id);

        // replace the post with the updated one
        posts.splice(postIndex, 1, returnedObject);

        // updating the state of the posts array with the updated post
        setPosts(posts);

        // navigate to the updated full page post
        window.scrollTo(0, 0);
        nav(`/posts/${targetPostId}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         ratePost function       ///////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // async function - is called when a users rates a post
  const ratePost = async (post, rating) => {
    try {
      // create a rating object that will be the json body for rating a post
      const userRatingObject = {
        userRating: rating,
      };

      // PATCH the new rating attribute to the API and assign the return object to returnedPost
      const returnedPost = await fetch(
        `https://tf-server-788f837b6e19.herokuapp.com/posts/${post[0]._id}/rating`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + sessionStorage.token,
          },
          body: JSON.stringify(userRatingObject),
        }
      );

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedPost.json();

      // add the id of the post that just been rated to the memberHadsRated array
      setMemberHasRated([...memberHasRated, returnedObject._id]);

      if (returnedPost.status != 200) {
        logoutMember();
        nav("/jwt-expired");
      } else {
        // assigning id of current post to targetPostId - this wont work with post[0]._id inside the findIndex() method
        const targetPostId = post[0]._id;
        // using targetPostId to find the post that has just been edited in the array of posts fetched from the server
        const postIndex = posts.findIndex((post) => targetPostId == post._id);

        // replace the post with the updated one
        posts.splice(postIndex, 1, returnedObject);

        // updating the state of the posts array with the updated post
        setPosts(posts);

        // navigate to the updated full page post
        window.scrollTo(0, 0);
        nav(`/posts/${targetPostId}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         deletePost function       ///////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const deletePost = async (post) => {
    try {
      // Delete request to the server with post id interpolated to url
      const returnedPost = await fetch(
        `https://tf-server-788f837b6e19.herokuapp.com/posts/${post[0]._id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + sessionStorage.token,
          },
        }
      );

      // const returnedObject = await returnedPost.json()
      if (returnedPost.status === 403) {
        logoutMember();
        nav("/jwt-expired");
      } else {
        // //////////////////////////////////////////////////////////
        // should be able to delete the post id from the array stored in memory?????

        // assigning id of current post to targetPostId - this wont work with post[0]._id inside the findIndex() method
        const targetPostId = post[0]._id;
        // using targetPostId to find the correct post in the array of posts fetched from the server
        const postIndex = posts.findIndex((post) => targetPostId == post._id);

        // remove deleted posts from the array of posts
        // set state of posts again with new array
        posts.splice(postIndex, 1);
        setPosts(posts);

        // navigate to the new post in full page post
        nav("/posts");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         submitComment function       ////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  // async function - is called when the comment form is submitted
  const submitComment = async (post, comment) => {
    try {
      // create object to receive create comment form data
      const newComment = {
        post: post[0]._id,
        author: loggedInMember.id,
        content: comment,
      };

      // post the newComment object to the API and assign the return object to returnedComment
      const returnedComment = await fetch(
        "https://tf-server-788f837b6e19.herokuapp.com/comments/new",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + sessionStorage.token,
          },
          body: JSON.stringify(newComment),
        }
      );

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedComment.json();

      // If JWT lost after login but before form submit
      if (returnedComment.status === 403) {
        logoutMember();
        nav("/jwt-expired");
      } else {
        // assigning id of current post to targetPostId - this wont work with post[0]._id inside the findIndex() method
        const targetPostId = post[0]._id;
        // using targetPostId to find the correct post in the array of posts fetched from the server
        const postIndex = posts.findIndex((post) => targetPostId == post._id);

        // pushing the new comment to the comments array in the correct post
        posts[postIndex].comments.push(returnedObject);

        // updating the state of the posts array with the new comments for this post
        setPosts(posts);

        // navigate to the full page post with new comments
        nav(`/posts/${targetPostId}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         deleteComment function       ///////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // async function - is called when the delete comment button is selected
  const deleteComment = async (comment, post) => {
    try {
      // Delete request to the server with comment id interpolated to url
      const returnComment = await fetch(
        `https://tf-server-788f837b6e19.herokuapp.com/comments/${comment.id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + sessionStorage.token,
          },
        }
      );

      // const returnedObject = await returnComment.json()
      if (returnComment.status === 403) {
        logoutMember();
        nav("/jwt-expired");
      } else {
        // //////////////////////////////////////////////////////////
        // should be able to delete the comment id from the array stored in memory?????
        // this will be harder than delete a post
        // this is loading pretty fast with a fetch, so may not be ncessary

        fetchPosts(setPosts);

        // navigate back to the post in full page post
        nav(`/posts/${post[0]._id}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////         editComment function       ///////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // async function - is called when the edit a post form is edited
  const editComment = async (comment, editedComment, post) => {
    try {
      // create object to receive edit post form data
      const editedCommentObject = {
        content: editedComment,
      };

      // PUT the new editPost object to the API and assign the return object to returnedPost
      const returnedEditedComment = await fetch(
        `https://tf-server-788f837b6e19.herokuapp.com/comments/${comment.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + sessionStorage.token,
          },
          body: JSON.stringify(editedCommentObject),
        }
      );

      // If JWT lost after login but before form submit
      if (returnedEditedComment.status === 403) {
        logoutMember();
        nav("/jwt-expired");
      } else {
        // fetch posts again as the data has changed
        fetchPosts(setPosts);

        // navigate to the full page post with new comments
        nav(`/posts/${post[0]._id}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {/* condiotionally render a guest or mamber nav bar */}
      {forumMember ? (
        <MemberNavBar
          logoutMember={logoutMember}
          loggedInMember={loggedInMember}
        />
      ) : (
        <NavBar />
      )}
      {/* Browser router paths */}
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              forumMember={forumMember}
              posts={posts}
              loggedInMember={loggedInMember}
              setPosts={setPosts}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              forumMember={forumMember}
              loginMember={loginMember}
              loginInput={loginInput}
              loginSuccess={loginSuccess}
              loginMessage={loginMessage}
              loginRedirect={loginRedirect}
              loginFormResetState={loginFormResetState}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              forumMember={forumMember}
              createMember={createMember}
              regMessage={regMessage}
              regSuccess={regSuccess}
              redirect={redirect}
              regFormResetState={regFormResetState}
            />
          }
        />
        <Route
          path="/view/all"
          element={
            <ViewAll
              forumMember={forumMember}
              posts={posts}
              setPosts={setPosts}
            />
          }
        />
        <Route
          path="/view/continent/asia"
          element={
            <Asia
              forumMember={forumMember}
              posts={asiaPosts}
              setPosts={setAsiaPosts}
              URI={"/category/Asia"}
            />
          }
        />
        <Route
          path="/view/continent/africa"
          element={
            <Africa
              forumMember={forumMember}
              posts={africaPosts}
              setPosts={setAfricaPosts}
              URI={"/category/Africa"}
            />
          }
        />
        <Route
          path="/view/continent/nth-america"
          element={
            <NthAmerica
              forumMember={forumMember}
              posts={northAmericaPosts}
              setPosts={setNorthAmericaPosts}
              URI={"/category/North America"}
            />
          }
        />
        <Route
          path="/view/continent/sth-america"
          element={
            <SthAmerica
              forumMember={forumMember}
              posts={southAmericaPosts}
              setPosts={setSouthAmericaPosts}
              URI={"/category/South America"}
            />
          }
        />
        <Route
          path="/view/continent/antarctica"
          element={
            <Antarctica
              forumMember={forumMember}
              posts={antarcticaPosts}
              setPosts={setAntarcticaPosts}
              URI={"/category/Antarctica"}
            />
          }
        />
        <Route
          path="/view/continent/europe"
          element={
            <Europe
              forumMember={forumMember}
              posts={europePosts}
              setPosts={setEuropePosts}
              URI={"/category/Europe"}
            />
          }
        />
        <Route
          path="/view/continent/australia"
          element={
            <Australia
              forumMember={forumMember}
              posts={australiaPosts}
              setPosts={setAustraliaPosts}
              URI={"/category/Australia"}
            />
          }
        />
        <Route path="/about" element={<About forumMember={forumMember} />} />
        <Route
          path="/contact"
          element={<Contact forumMember={forumMember} />}
        />
        <Route
          path="/terms"
          element={<TermsOfUse forumMember={forumMember} />}
        />
        <Route
          path="/privacy"
          element={<Privacy forumMember={forumMember} />}
        />
        <Route
          path={"/posts"}
          element={
            <MyPosts
              forumMember={forumMember}
              latestPosts={posts}
              loggedInMember={loggedInMember}
            />
          }
        />
        <Route
          path={"/posts/new"}
          element={
            <CreateAPost forumMember={forumMember} submitPost={submitPost} />
          }
        />
        <Route path={"/posts/:id"} element={<ShowPostWrapper />} />
        <Route path={"/posts/edit/:id"} element={<ShowPostWrapper />} />
        <Route
          path={"/jwt-expired"}
          element={<ModalJwtExpired redirectFunction={redirectFunction} />}
        />
        <Route path="*" element={<PageNotFound forumMember={forumMember} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
