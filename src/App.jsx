import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import ViewAll from './components/ViewAll'
import Asia from './components/Asia'
import Africa from './components/Africa'
import NthAmerica from './components/NthAmerica'
import SthAmerica from './components/SthAmerica'
import Antarctica from './components/Antarctica'
import Europe from './components/Europe'
import Australia from './components/Australia'
import About from './components/About'
import Contact from './components/Contact'
import TermsOfUse from './components/TermsOfUse'
import Privacy from './components/Privacy'
import './HeroImage.css'
import MyPosts from './components/MyPosts'
import CreateAPost from './components/CreateAPost'
import FullPagePost from './components/FullPagePost'
import PageNotFound from './components/PageNotFound'
import MemberNavBar from './components/MemberNavBar'
import ModalRegistrationMessage from './ModalRegistrationMessage'


const App = () => {

  // navigate to pages from within a function
  const nav = useNavigate()

  // state variable to track and store posts array
  // boolean used  with forumMember for testing conditional rendering of guest and member elements
  // track state of the logged in member
  const [posts, setPosts] = useState([])
  const [forumMember, setForumMember] = useState(false)
  const [loggedInMember, setLoggedInMember] = useState({})
  const [regSuccess, setRegSuccess] = useState(false)
  const [regMessage, setRegMessage] = useState('')
  
  // create currentUser Object from values in session storage
  const currentUser = {
    username: sessionStorage.getItem("username"),
    id: sessionStorage.getItem("id"),
    token: sessionStorage.getItem("token"),
  }

  function redirect() {
    nav("/login")
  }

  // on mount and tracking setForumMember changes - if the there is session storage data stored on the current user
  // set logged in member to currentUser object
  // set forumMember to true for conditional rendering
  useEffect(() => {
    if (currentUser.token) {
      setLoggedInMember(currentUser)
      setForumMember(true)
    }
  }, [setForumMember])
 

  // fetch all the posts from the API on component on mount only and assign to posts with sePosts()
  // may need to change this to trigger and track the posts state
  useEffect(() => {
    async function fetchPosts() {
      const result = await fetch("https://indigo-stocking-production.up.railway.app/posts/")
      const data = await result.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  // Higher Order Function to display a full page post from the link in the preview cards
  // uses id param passed in from preview card button to filter posts array to find the correct post object
  // FullPagePost component is passed the post array with a single post object, forumMember for conditional rendering
  // loggedInMember object and functions to edit & delete posts from the database. Submit, edit and delete comments from the database
  const ShowPostWrapper = () =>{

    const { id } = useParams()
    const post = posts.filter(post => post._id == id)

    return post == 0
      ? <PageNotFound />
      : <FullPagePost
          post={post}
          forumMember={forumMember}
          loggedInMember={loggedInMember} 
          editPost={editPost}
          deletePost={deletePost} 
          submitComment={submitComment} 
          editComment={editComment}
          deleteComment={deleteComment} 
        />
  }


  // // Higher Order Function to display a full page post from the link in the preview cards
  // // uses id param passed in from preview card button to filter posts array to find the correct post object
  // // FullPAgePost component is passed the post array with a single post object, forumMember for confitioanl rendering
  // // and submitComment is the function to post the data from the comment form to the API
  // const EditPostWrapper = () =>{
  //   const { id } = useParams()
  //   const post = posts.filter(post => post._id == id)
  //   return post == 0
  //     ? <PageNotFound />
  //     : <FullPagePostToEdit post={post} forumMember={forumMember} submitComment={submitComment} loggedInMember={loggedInMember} deletePost={deletePost} editPost={editPost} />
  // }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         createMember function       /////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function - is called when the register form is submitted
  const createMember =  async (user, pwd) => {

    try {
      // create object to store Register form data that will be posted to db
      const newMember = {
        username: user,
        password: pwd
      }
      
      // post the new member to the API and assign the return object to returnedMember
      const returnedMember = await fetch('https://indigo-stocking-production.up.railway.app/auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify(newMember)
      })

      ////////////////////////////////////
      // This is possibly not needed here
      ////////////////////////////////////

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedMember.json()

      console.log(returnedObject)
      console.log(Boolean(returnedObject.error))

      if (!returnedObject.error){
        setRegMessage('Registration Successful')
        setRegSuccess(true)
        // once complete, navigate to the login screen
        // nav("/login")
      } else {
        setRegMessage('Registration failed')
        setRegSuccess(false)
        // nav("/register/result")
      }
    }
    catch (err){
      console.log(err.message)
    }
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         loginMember function       //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function - is called when the login form is submitted
  const loginMember =  async (username, password) => {

    try {
      // create object to store login form data that will be posted to db
      const memberToLogin = {
        username: username,
        password: password
      }
      
      // post the new memberToLogin object to the API and assign the return object to returnedMember
      const returnedMember = await fetch('https://indigo-stocking-production.up.railway.app/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify(memberToLogin)
      })

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedMember.json()


      // The user has supplied valid login credentials
      if (returnedObject.id) {
        
        // assigning the returned object to session storage keys
        sessionStorage.setItem("username", returnedObject.username)
        sessionStorage.setItem("id", returnedObject.id)
        sessionStorage.setItem("token", returnedObject.token)

        // forumMember is logged in for conditional rendering
        setForumMember(true)

        // set logged in member details
        // may be unnecessary repitition here????????????
        setLoggedInMember({
          username: returnedObject.username,
          id: returnedObject.id,
          token: returnedObject.token
        })

        // If the user has viewed a post before clicking the login or register/login forms
        // that post id will be stored in session storage.
        // Once the user has successfully logged in, they will be returned to the last post they were reading.
        // Otherwise they have logged in from the landing page so will be redirected to that.
        sessionStorage.postId
          ? nav(`/posts/${sessionStorage.postId}`)
          : nav('/')

      // login details are incorrect
      // need to render a modal here with error message
      } else {
        alert('failed login')
        nav('/')
      }
    }
    catch (err){
      console.log(err.message)
    }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         logoutMember function       /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// logs out the member
  function logoutMember() {
    // for conditional rendering
    setForumMember(false)
    // clear session storage
    sessionStorage.clear()
    // set logged in member details to empty object
    setLoggedInMember({})
    // navigate to the home page
    nav('/')
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         submitPost function       ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function - is called when the create a post form is submitted
  const submitPost =  async (title, continent, postContent) => {

    try {
      // create object to receive create post form data
      const newPost = {
        author: loggedInMember.id,
        title: title,
        category: continent,
        content: postContent
      }

      // post the new newPost object to the API and assign the return object to returnedPost
      const returnedPost = await fetch('https://indigo-stocking-production.up.railway.app/posts/new', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + sessionStorage.token
        },
        'body': JSON.stringify(newPost)
      })

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedPost.json()
      
      // If JWT lost after login but before form submit
      if (returnedObject.error) {  
        alert('Whoops! Looks like you were logged out. Please log in and try again.')
        logoutMember()
        return nav('/login')
      }

      posts.unshift(returnedObject)
      setPosts(posts)

      // // add the returned post object to the posts array
      // setPosts([...posts, returnedObject])


      // navigate to the new post in full page post
      nav(`/posts/${returnedObject._id}`)
    }
    catch (err){
      console.log(err.message)
    }


  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         editPost function       ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function - is called when a users post is edited
const editPost =  async (post, title, continent, postContent) => {

  try {

    // create object to receive edit post form data
    const editedPost = {
      title: title,
      category: continent,
      content: postContent
    }

    // PUT the new editPost object to the API and assign the return object to returnedPost
    const returnedPost = await fetch(`https://indigo-stocking-production.up.railway.app/posts/${post[0]._id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + sessionStorage.token
      },
      'body': JSON.stringify(editedPost)
    })

    // creating JSON object with returned object from the fetch request
    const returnedObject = await returnedPost.json()

    // If JWT lost after login but before form submit
    // if (returnedObject.error) {  
    //   alert('Whoops! Looks like you were logged out. Please log in and try again.')
    //   logoutMember()
    //   return nav('/login')
    // }

    // assigning id of current post to targetPostId - this wont work with post[0]._id inside the findIndex() method
    const targetPostId = post[0]._id
    // using targetPostId to find the post that has just been edited in the array of posts fetched from the server
    const postIndex = posts.findIndex(post => targetPostId == post._id)

    // replace the post with the updated one
    posts.splice(postIndex, 1, returnedObject)

    // updating the state of the posts array with the updated post
    setPosts(posts)

    // navigate to the updated full page post
    window.scrollTo(0, 0)
    nav(`/posts/${targetPostId}`)
  }
  catch (err){
    console.log(err.message)
  }

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         deletePost function       ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deletePost =  async (post) => {

  try {

    // Delete request to the server with post id interpolated to url
    const returnedPost = await fetch(`https://indigo-stocking-production.up.railway.app/posts/${post[0]._id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + sessionStorage.token
      }
    })

    const returnedObject = await returnedPost.json()

    // If JWT lost after login but before form submit
    // if (returnedObject.error) {  
    //   alert('Whoops! Looks like you were logged out. Please log in and try again.')
    //   logoutMember()
    //   return nav('/login')
    // }

    // //////////////////////////////////////////////////////////
    // should be able to delete the post id from the array stored in memory?????

    // fetch posts again as the posts array has changed
    async function fetchPosts() {
      const result = await fetch("https://indigo-stocking-production.up.railway.app/posts/")
    
      const data = await result.json()
      setPosts(data)
    }
    fetchPosts()

    // navigate to the new post in full page post
    nav('/posts')
  }
  catch (err){
    console.log(err.message)
  }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         submitComment function       ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////
  
// async function - is called when the comment form is submitted
  const submitComment =  async (post, comment) => {

    try {
      // create object to receive create comment form data
      const newComment = {
        post: post[0]._id,
        author: loggedInMember.id,
        content: comment
      }
      
      // post the newComment object to the API and assign the return object to returnedComment
      const returnedComment = await fetch('https://indigo-stocking-production.up.railway.app/comments/new', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + sessionStorage.token
        },
        'body': JSON.stringify(newComment)
      })

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedComment.json()
      
      // If JWT lost after login but before form submit
      if (returnedObject.error) {  
        alert('Whoops! Looks like you were logged out. Please log in and try again.')
        logoutMember()
        return nav('/login')
      }

      // assigning id of current post to targetPostId - this wont work with post[0]._id inside the findIndex() method
      const targetPostId = post[0]._id
      // using targetPostId to find the correct post in the array of posts fetched from the server
      const postIndex = posts.findIndex(post => targetPostId == post._id)

      // pushing the new comment to the comments array in the correct post
      posts[postIndex].comments.push(returnedObject)

      // updating the state of the posts array with the new comments for this post
      setPosts(posts)

      // navigate to the full page post with new comments
      nav(`/posts/${targetPostId}`)
    }
    catch (err){
      console.log(err.message)
    }
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         deleteComment function       ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function - is called when the delete comment button is selected
const deleteComment =  async (comment, post) => {

  try {
     // Delete request to the server with comment id interpolated to url
    const returnComment = await fetch(`https://indigo-stocking-production.up.railway.app/comments/${comment.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + sessionStorage.token
      }
    })

    const returnedObject = returnComment.json()

    // If JWT lost after login but before form submit
    // if (returnedObject.error) {  
    //   alert('Whoops! Looks like you were logged out. Please log in and try again.')
    //   logoutMember()
    //   return nav('/login')
    // }

    // //////////////////////////////////////////////////////////
    // should be able to delete the comment id from the array stored in memory?????
    // this will be harder than delete a post
    // this is loading pretty fast with a fetch, so may not be ncessary
    async function fetchPosts() {
      const result = await fetch("https://indigo-stocking-production.up.railway.app/posts/")
      const data = await result.json()
      setPosts(data)
    }
    fetchPosts()

    // navigate back to the post in full page post
    nav(`/posts/${post[0]._id}`)
  }
  catch (err){
    console.log(err.message)
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         editComment function       ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function - is called when the edit a post form is edited
const editComment =  async (comment, editedComment, post) => {

  try {
    // create object to receive edit post form data
    const editedCommentObject = {
      content: editedComment
    }

    // PUT the new editPost object to the API and assign the return object to returnedPost
    const returnedEditedComment = await fetch(`https://indigo-stocking-production.up.railway.app/comments/${comment.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + sessionStorage.token
      },
      'body': JSON.stringify(editedCommentObject)
    })

////////////////////////////////////////////////////
// not used


    // creating JSON object with returned object from the fetch request
    const returnedObject = await returnedEditedComment.json()

    // If JWT lost after login but before form submit
    // if (returnedObject.error) {  
    //   alert('Whoops! Looks like you were logged out. Please log in and try again.')
    //   logoutMember()
    //   return nav('/login')
    // }

    // fetch posts again as the data has changed
    async function fetchPosts() {
      const result = await fetch("https://indigo-stocking-production.up.railway.app/posts/")
      const data = await result.json()
      setPosts(data)
    }
    fetchPosts()


    // navigate to the full page post with new comments
    nav(`/posts/${post[0]._id}`)
  }
  catch (err){
    console.log(err.message)
  }

}


    // filtering the posts array returned by the fetch into separate arrays for each category
    const europePosts = posts.filter(post => post.category == 'Europe')
    const australiaPosts = posts.filter(post => post.category == 'Australia')
    const asiaPosts = posts.filter(post => post.category == 'Asia')
    const africaPosts = posts.filter(post => post.category == 'Africa')
    const nthAmericaPosts = posts.filter(post => post.category == 'North America')
    const sthAmericaPosts = posts.filter(post => post.category == 'South America')
    const antarcticaPosts = posts.filter(post => post.category == 'Antarctica')

  return (
    <>
    {/* Browser router paths */}
      {forumMember ? <MemberNavBar logoutMember={logoutMember} loggedInMember={loggedInMember}  /> : <NavBar />}
        <Routes>
          <Route path="/" element={<LandingPage forumMember={forumMember} latestPosts={posts} loggedInMember={loggedInMember} />} />
          <Route path="/login" element={<Login forumMember={forumMember} loginMember={loginMember} />} />    
          <Route path="/register" element={<Register forumMember={forumMember} createMember={createMember} regMessage={regMessage} regSuccess={regSuccess} redirect={redirect} />} />
          <Route path="/view/all" element={<ViewAll forumMember={forumMember} allPosts={posts} />} />
          <Route path="/view/continent/asia" element={<Asia forumMember={forumMember} asiaPosts={asiaPosts} />} />
          <Route path="/view/continent/africa" element={<Africa forumMember={forumMember} africaPosts={africaPosts} />} />
          <Route path="/view/continent/nth-america" element={<NthAmerica forumMember={forumMember} nthAmericaPosts={nthAmericaPosts} />} />
          <Route path="/view/continent/sth-america" element={<SthAmerica forumMember={forumMember} sthAmericaPosts={sthAmericaPosts} />} />
          <Route path="/view/continent/antarctica" element={<Antarctica forumMember={forumMember} antarcticaPosts={antarcticaPosts} />} />
          <Route path="/view/continent/europe" element={<Europe forumMember={forumMember} europePosts={europePosts} />} />
          <Route path="/view/continent/australia" element={<Australia forumMember={forumMember} australiaPosts={australiaPosts} />} />
          <Route path="/about" element={<About forumMember={forumMember} />} />
          <Route path="/contact" element={<Contact forumMember={forumMember} />} />
          <Route path="/terms" element={<TermsOfUse forumMember={forumMember} />} />
          <Route path="/privacy" element={<Privacy forumMember={forumMember} />} />
          <Route path={"/posts"} element={<MyPosts forumMember={forumMember} latestPosts={posts} loggedInMember={loggedInMember} />} />
          <Route path={"/posts/new"} element={<CreateAPost forumMember={forumMember} submitPost={submitPost} />} />
          <Route path={"/posts/:id"} element={<ShowPostWrapper />}  />
          <Route path={"/posts/edit/:id"} element={<ShowPostWrapper />}  />
          <Route path='*' element={<PageNotFound forumMember={forumMember} />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App