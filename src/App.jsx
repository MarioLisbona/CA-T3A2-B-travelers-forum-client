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


const App = () => {

  const nav = useNavigate()


  // state variables for posts and members
  // boolean used  with forumMember for testing conditional rendering of guest and member elements
  const [posts, setPosts] = useState([])
  const [forumMember, setForumMember] = useState(false)
  // track state of the logged in member
  const [loggedInMember, setLoggedInMember] = useState({})
  
  // create currentUser Object from values in session storage
  const currentUser = {
    username: sessionStorage.getItem("username"),
    id: sessionStorage.getItem("id"),
    token: sessionStorage.getItem("token"),
  }

  // on mount and if setForumMember changes, if the there is session storage data stored on the current user
  // set logged in member to current user object
  // set forumMember to true for conditional rendering
  useEffect(() => {
    if (currentUser.token) {
      setLoggedInMember(currentUser)
      setForumMember(true)
    }
    console.log('inside useEffect for setting logged in member')
  }, [setForumMember])
 

  // fetch all the posts from the API on component on mount only and assign to state variable
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
  // FullPAgePost component is passed the post array with a single post object, forumMember for confitioanl rendering
  // and submitComment is the function to post the data from the comment form to the API
  const ShowPostWrapper = () =>{
    const { id } = useParams()
    const post = posts.filter(post => post._id == id)
    console.log(post)
    return post == 0
      ? <PageNotFound />
      : <FullPagePost post={post} forumMember={forumMember} submitComment={submitComment} />
  }

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

      // creating JSON object with returned object from the fetch request
      const returnedObject = await returnedMember.json()

      // once complete, navigate to the login screen
      nav('/login')
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

      // navigate to landing/member home page
      nav('/')
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

      nav('/')
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         submitPost function       ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function - is called when the create a post form is submitted
  const submitPost =  async (title, continent, postContent) => {

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
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(newPost)
    })

    // creating JSON object with returned object from the fetch request
    const returnedObject = await returnedPost.json()

    // add the returned post object to the posts array
    setPosts([...posts, returnedObject])

    // navigate to the new post in full page post
    nav(`/posts/${returnedObject._id}`)

  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         submitComment function       ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // async function - is called when the comment form is submitted

  const submitComment =  async (post, comment) => {

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
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(newComment)
    })

    // creating JSON object with returned object from the fetch request
    const returnedObject = await returnedComment.json()
    

    // assigning id of current post to targetPostId - this wont work with post[0]._id inside the findIndex() method
    const targetPostId = post[0]._id
    // using targetPostId to find the correct post in the array of posts fetched from the server
    const postIndex = posts.findIndex(post => targetPostId == post._id)

    // pushing the new comment to the comments array in the correct post
    posts[postIndex].comments.push(returnedObject)
    // updating the state of the posts array with the new comments for this post
    setPosts(posts)

    // navigate to the full page post with new comments
    window.scrollTo(0, 0)
    nav(`/posts/${targetPostId}`)
  }


    // fitlering the posts array returned by the fetch into separate arrays for each category
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
      {forumMember ? <MemberNavBar logoutMember={logoutMember} /> : <NavBar />}
        <Routes>
          <Route path="/" element={<LandingPage forumMember={forumMember} latestPosts={posts} loggedInMember={loggedInMember} />} />
          <Route path="/login" element={<Login forumMember={forumMember} loginMember={loginMember} />} />    
          <Route path="/register" element={<Register forumMember={forumMember} createMember={createMember} />} />
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
          <Route path='*' element={<PageNotFound forumMember={forumMember} />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App