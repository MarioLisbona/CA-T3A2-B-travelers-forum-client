import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Link } from "react-router-dom"
import { expect } from "vitest"
import PreviewCard from '../src/components/PreviewCard'
import React from "react";
import { unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import NavBar from '../src/components/NavBar'
import MemberNavBar from '../src/components/MemberNavBar'
import CreateAPost from '../src/components/CreateAPost'
import ViewAll from '../src/components/ViewAll'

describe('Navbar renders correct links for guest', () => {
  let forumMember = true

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)

    act( () => {
      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        , container
      )
    })
  })

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove()
    container = null
  })

    it('Navbar renders Register and login links for unlogged in users', () => {
      expect(screen.getByText('Register')).toBeDefined()
    })

    it('Navbar renders Register and login links for unlogged in users', () => {
      expect(screen.getByText('Login')).toBeDefined()
    })
})

describe('Navbar renders correct links for member 1', () => {
  let forumMember = true
  let loggedInMember =  {
    username: 'AliTaubner',
    id: '63ddd718cb5adb00abd92db5',
  }

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)

    act( () => {
      render(
        <BrowserRouter>
          <MemberNavBar forumMember loggedInMember={loggedInMember} />
        </BrowserRouter>
        , container
      )
    })
  })

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove()
    container = null
  })

    it('Navbar renders username link for logged in user', () => {
      expect(screen.getByText('AliTaubner')).toBeDefined()
    })
})

describe('Navbar renders correct links for member 2', () => {
  let forumMember = true
  let loggedInMember =  {
    username: 'MarioLisbona',
    id: '63ddd718cb5adb00abd92db5',
  }

  let posts = [
    {
        "_id": "63de2964e7cdc5329d0101da",
        "title": "Test Post 2",
        "author": {
            "_id": "63ddd718cb5adb00abd92db5",
            "username": "MarioLisbona"
        },
        "category": "Australia",
        "content": "This is also a test post",
        "comments": [],
        "rating": [],
        "date_posted": "2023-02-04T09:46:12.385Z",
        "__v": 0,
        "calculated_rating": 0,
        "id": "63de2964e7cdc5329d0101da"
    },
    {
        "_id": "63de2945e7cdc5329d0101d3",
        "title": "Test post 1",
        "author": {
            "_id": "63ddd718cb5adb00abd92db5",
            "username": "MarioLisbona"
        },
        "category": "Asia",
        "content": "This is a test post",
        "comments": [],
        "rating": [],
        "date_posted": "2023-02-04T09:45:41.873Z",
        "__v": 0,
        "calculated_rating": 0,
        "id": "63de2945e7cdc5329d0101d3"
    }
  ]

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)

    act( () => {
      render(
        <BrowserRouter>
          <MemberNavBar forumMember loggedInMember={loggedInMember} />
          <CreateAPost />
          <ViewAll posts={posts}/>
        </BrowserRouter>
        , container
      )
    })
  })

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove()
    container = null
  })

    it('Navbar renders username link for logged in user', () => {
      expect(screen.getByText('MarioLisbona')).toBeDefined()
    })

    it('Shows create a post form when create a post link is clicked',  async () => {
      await userEvent.click(screen.getByText('Create a Post'))
      expect(screen.getByText('Create a post')).toBeDefined()
    })
})