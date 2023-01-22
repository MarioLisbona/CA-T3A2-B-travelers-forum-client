import React from 'react'
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

  const forumMember = true

  const member = {
    name: 'Mario',
    age: 43
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage forumMember={forumMember} memberName={member.name} />} />
          <Route path="/login" element={<Login forumMember={forumMember} />} />
          <Route path="/register" element={<Register forumMember={forumMember} />} />
          <Route path="/view/all" element={<ViewAll forumMember={forumMember} />} />
          <Route path="/view/continent/asia" element={<Asia forumMember={forumMember} />} />
          <Route path="/view/continent/africa" element={<Africa forumMember={forumMember} />} />
          <Route path="/view/continent/nth-america" element={<NthAmerica forumMember={forumMember} />} />
          <Route path="/view/continent/sth-america" element={<SthAmerica forumMember={forumMember} />} />
          <Route path="/view/continent/antarctica" element={<Antarctica forumMember={forumMember} />} />
          <Route path="/view/continent/europe" element={<Europe forumMember={forumMember} />} />
          <Route path="/view/continent/australia" element={<Australia forumMember={forumMember} />} />
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