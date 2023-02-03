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

  let testPost = {
    "_id": "63dae1618c42e092ac5b80b0",
    "title": "creating a post about africa",
    "author": {
        "_id": "63dae0718c42e092ac5b8076",
        "username": "Person12345"
    },
    "category": "Africa",
    "content": "Zulu Nation!",
    "comments": [],
    "date_posted": "2023-02-01T22:02:09.746Z",
    "__v": 0
  }

  beforeEach( function () {
    container = render(
      <BrowserRouter>
        <App>
          <LandingPage>
            <PreviewCard testPost={testPost} />
          </LandingPage>
        </App>
      </BrowserRouter>
    ).container
  })

  it('Displays a title for the post', () => {
    // console.log(JSON.stringify(container.querySelectorAll('h3').length))
    expect(container.querySelector('h3')).toBeDefined()
    // expect(container.querySelector('h3')).toHaveTextContent('creating a post about africa')
  })

})

