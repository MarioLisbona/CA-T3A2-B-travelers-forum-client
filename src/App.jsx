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

  const forumMember = false

  function AddUser(email, username, password) {
    const newUser = {
      email: email,
      username: username,
      password: password
    }

    console.log(users)

    users.push(newUser)

    console.log(users)
  }

  function loginDetails(email, password) {
    console.log(`User attempting to login\n ${email}: ${password}`)
  }


  const [posts, setPosts] = useState([])
  const [members, setMembers] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const result = await fetch("https://indigo-stocking-production.up.railway.app/posts")
      const data = await result.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    async function fetchMembers() {
      const result = await fetch("https://indigo-stocking-production.up.railway.app/members")
      const data = await result.json()
      setMembers(data)
    }

    fetchMembers()
  }, [])

  const ShowPostWrapper = () =>{
    const { id } = useParams()
    const post = posts.filter(post => post._id == id)
    console.log(post)
    return post ? <FullPagePost post={post} /> : <h1>That post does not exist</h1>
  }




    const europePosts = posts.filter(post => post.category == 'Europe')
    const australiaPosts = posts.filter(post => post.category == 'Australia')
    const asiaPosts = posts.filter(post => post.category == 'Asia')
    const africaPosts = posts.filter(post => post.category == 'Africa')
    const nthAmericaPosts = posts.filter(post => post.category == 'North America')
    const sthAmericaPosts = posts.filter(post => post.category == 'South America')
    const antarcticaPosts = posts.filter(post => post.category == 'Antarctica')


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage forumMember={forumMember} memberName={members[0]} latestPosts={posts} />} />
          <Route path="/login" element={<Login forumMember={forumMember} loginDetails={loginDetails}/>} />
          <Route path="/register" element={<Register forumMember={forumMember} addUser={AddUser} />} />
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
          <Route path={"/posts"} element={<MyPosts forumMember={forumMember} />} />
          <Route path={"/posts/create"} element={<CreateAPost forumMember={forumMember} />} />

          {/* <Route path={"/posts/:id"} element={<FullPagePost forumMember={forumMember} />} /> */}
          <Route path={"/posts/:id"} element={<ShowPostWrapper />} />

          <Route path='*' element={<PageNotFound forumMember={forumMember} />} />
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App