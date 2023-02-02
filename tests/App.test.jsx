import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Link } from "react-router-dom"
import App from "../src/App"
import LandingPage from "../src/components/LandingPage"
import { expect } from "vitest"
import Header from '../src/components/Header'
import Login from '../src/components/Login'
import NavBar from '../src/components/NavBar'
import LoginForm from '../src/components/LoginForm'
import PreviewCard from '../src/components/PreviewCard'

describe('App Component', () => {
  let container
  // let forumMember = true
  // let loggedInMember = { username: 'MarioLisbona' }

  container = render(
    <BrowserRouter>
        <App>
          <LandingPage />
        </App>
      </BrowserRouter>
    ).container

    // console.log(container)

    it('Displays a heading on the landing page', () => {
      expect(container.querySelector('h1')).toBeDefined()
      expect(container.querySelector('h1')).toHaveTextContent("Welcome to the Traveler's Forum")
    })

    it('Displays a sub-heading on the landing page', () => {
      expect(container.querySelector('h2')).toBeDefined()
      // expect(container.querySelector('h2')).toHaveTextContent("See the latest Posts")
    })
})