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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view/all" element={<ViewAll />} />
          <Route path="/view/continent/asia" element={<Asia />} />
          <Route path="/view/continent/africa" element={<Africa />} />
          <Route path="/view/continent/nth-america" element={<NthAmerica />} />
          <Route path="/view/continent/sth-america" element={<SthAmerica />} />
          <Route path="/view/continent/antarctica" element={<Antarctica />} />
          <Route path="/view/continent/europe" element={<Europe />} />
          <Route path="/view/continent/australia" element={<Australia />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path='*' element={<h4>404 Error: Page not found</h4>} />
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App