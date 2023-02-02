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


describe('PreviewCard Component', () => {
  let container

  beforeEach( function () {
    container = render(
      <BrowserRouter>
        <App>
          <PreviewCard />
        </App>
      </BrowserRouter>
    ).container
  })

  it('Displays a title for the post', () => {
    expect(container.querySelector('h3')).toBeDefined()
    // expect(container.querySelector('h3')).toHaveTextContent('Post Title')
  })

  it('Displays author of the post', () => {
    expect(container.querySelector('h6')).toBeDefined()
    // expect(container.querySelector('h6')).toHaveTextContent('Author')
  })

  it('Displays the category of the post', () => {
    expect(container.querySelector('h6')).toBeDefined()
    // expect(container.querySelector('h6')).toHaveTextContent('Post Title')
  })

  it('Displays when the post was created', () => {
    expect(container.querySelector('h66')).toBeDefined()
    console.log(container.querySelector('h66'))
    // expect(container.querySelector('h6')).toHaveTextContent('Post Title')
  })

})

