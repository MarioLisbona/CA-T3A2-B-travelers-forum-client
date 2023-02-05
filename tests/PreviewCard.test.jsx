import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter, Link } from "react-router-dom"
import { expect } from "vitest"
import PreviewCard from '../src/components/PreviewCard'
import React from "react";
import { unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import moment from 'moment/moment'


// testing that the preview card renders the proper data based on the testPost provided
  let testPost = {
    "_id": "63de2945e7cdc5329d0101d3",
    "title": "Test post 1",
    "author": {
        "_id": "63ddd718cb5adb00abd92db5",
        "username": "MarioLisbona"
    },
    "category": "Asia",
    "content": "This is a test post",
    "comments": [],
    "rating": [
        3
    ],
    "date_posted": "2023-02-04T09:45:41.873Z",
    "__v": 0,
    "calculated_rating": 3,
    "id": "63de2945e7cdc5329d0101d3"
}

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)

    act(() => {
      render(
        <BrowserRouter>
          <PreviewCard post={testPost} />
        </BrowserRouter>
      , container
      )
    })
  })

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  describe('Preview card renders with post information', () => {
    it("render the post title", () => {
      expect(screen.getByText('Test post 1...')).toBeDefined()
    })

    it("render the post author", () => {
      expect(screen.getByText('Author: MarioLisbona')).toBeDefined()
    })

    it("render the post category", () => {
      expect(screen.getByText('Continent: Asia')).toBeDefined()
    })

    it("render the post rating", () => {
      expect(screen.getByText(`Rating: ${testPost.calculated_rating} ★`)).toBeDefined()
    })

    it("render the date posted", () => {
      expect(screen.getByText(`Posted: ${moment(testPost.date_posted).startOf('minute').fromNow()}`)).toBeDefined()
    })

    it("render the post preview", () => {
      expect(screen.getByText('This is a test post......')).toBeDefined()
    })
    it("render a button to read more", () => {
      expect(screen.getByText('Read more')).toBeDefined()
    })
  })

