import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

  const users = [
    {
      email: 'mario.lisbona@gmail.com',
      username: 'Mario',
      password: 'password123'
    },
    {
      email: 'ali.lisbona@gmail.com',
      username: 'Mario',
      password: 'Alisha999999'
    },
    {
      email: 'amtaubner@gmail.com',
      username: 'Aligirl90',
      password: 'ali123'
    },
    {
      email: 'coda@cat.com',
      username: 'Coda',
      password: 'coda123'
    },
  ]

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

  const member1 = {
    name: 'Mario',
    age: 43
  }

  const member2 = {
    name: 'Ali',
    age: 32
  }

  const member3 = {
    name: 'Coda',
    age: 3
  }

  const member4 = {
    name: 'Someone Else',
    age: 44
  }


  const [posts, setPosts] = useState(seedPosts)

  // useEffect(() => {
  //   async function fetchPosts() {
  //     const result = await fetch("https://indigo-stocking-production.up.railway.app/posts")
  //     const data = await result.json()
  //     setPosts(data)
  //   }

  //   fetchPosts()
  // }, [])



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
          <Route path="/" element={<LandingPage forumMember={forumMember} memberName={member1.name} />} />
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
          <Route path={"/sample-post"} element={<FullPagePost forumMember={forumMember} />} />
          <Route path='*' element={<PageNotFound forumMember={forumMember} />} />
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App