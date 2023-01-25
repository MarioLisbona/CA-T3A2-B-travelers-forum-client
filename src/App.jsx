import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
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

const App = () => {

  // boolean used for testing conditional rendering of guest and member elements
  const forumMember = false

  // state variables for posts and members
  const [posts, setPosts] = useState([])
  const [members, setMembers] = useState([])

  // fetch all the posts from the API on component on mount only and assign to state variable
  // may need to change this to trigger and track the posts state
  useEffect(() => {
    async function fetchPosts() {
      const result = await fetch("https://indigo-stocking-production.up.railway.app/posts")
      const data = await result.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  // fetch all the members from the API on component on mount only and assign to members variable
  // may need to change this to trigger and track the members state
  useEffect(() => {
    async function fetchMembers() {
      const result = await fetch("https://indigo-stocking-production.up.railway.app/members")
      const data = await result.json()
      setMembers(data)
    }

    fetchMembers()
  }, [])

  // Higher Order Function to display a full page post from the link in the preview cards
  // uses id param passed in from preview card button to filter posts array to find the correct post object
  // FullPAgePost component is passed the post array with a single post object, forumMember for confitioanl rendering
  // and submitComment is the function to post the data from the comment form to the API
  const ShowPostWrapper = () =>{
    const { id } = useParams()
    const post = posts.filter(post => post._id == id)
    return post
      ? <FullPagePost post={post} forumMember={forumMember} submitComment={submitComment} />
      : <PageNotFound />
  }

  // async function - is called when the register form is submitted
  // passed the data from the register form and creates a new member object with user and pwd
  const createMember =  async (user, pwd) => {

    // create object to receive Register form data
    const newMember = {
      username: user,
      password: pwd
    }

    // testing
    console.log(newMember)
    
    // post the new member to the API and assign the return object to returnedMember
    const returnedMember = await fetch('https://indigo-stocking-production.up.railway.app/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(newMember)
    })

    // testting
    console.log(returnedMember)

  }

  // async function - is called when the create a post form is submitted
  // passed the data from the create a post form and creates a new post object with itle, continent, postContent
  const submitPost =  async (title, continent, postContent) => {

    // create object to receive Register form data
    const newPost = {
      title: title,
      category: continent,
      content: postContent
    }

    // testing
    console.log(newPost)


    
    // post the new post to the API and assign the return object to returnedPost
    const returnedPost = await fetch('https://indigo-stocking-production.up.railway.app/posts/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(newPost)
    })

    // testing
    console.log(returnedPost)

  }

  // async function - is called when the comment form is submitted
  // passed the data from the comment form and creates a new comment object with postId, title, continent, comment
  const submitComment =  async (postId, title, continent, comment) => {

    // create object to receive Register form data
    const newComment = {
      post_id: postId,
      title: title,
      continent: continent,
      comment: comment
    }

    // testing
    console.log(newComment)


    // post the new comment to the API and assign the return object to returnedComment
    const returnedComment = await fetch('https://indigo-stocking-production.up.railway.app/comments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(newComment)
    })

    // testing
    console.log(returnedComment)
  }

    // fitlering the posts array returned by the feth into seperate arrays for each category
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage forumMember={forumMember} latestPosts={posts} />} />

          {/* TEST FUNCTIONS BEING USED FOR LOGIN AND REGISTER */}
          <Route path="/login" element={<Login forumMember={forumMember} />} />    
          <Route path="/register" element={<Register forumMember={forumMember} createMember={createMember} />} />
          {/* ////////////////////////////////////////////////////////////////////////////////////// */}

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
          <Route path={"/posts"} element={<MyPosts forumMember={forumMember} latestPosts={posts} />} />
          <Route path={"/posts/create"} element={<CreateAPost forumMember={forumMember} submitPost={submitPost} />} />

          {/* <Route path={"/posts/:id"} element={<FullPagePost forumMember={forumMember} />} /> */}
          <Route path={"/posts/:id"} element={<ShowPostWrapper />} />

          <Route path='*' element={<PageNotFound forumMember={forumMember} />} />
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App