import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Link } from "react-router-dom"
import App from "../src/App"
import LandingPage from "../src/components/LandingPage"
import { expect } from "vitest"
import PreviewCard from '../src/components/PreviewCard'
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import moment from 'moment/moment'


describe('PreviewCard Component', () => {

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

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('Preview card renders with post information', () => {
    it("render the post title", () => {
      act(() => {
        render(
          <BrowserRouter>
            <PreviewCard post={testPost} />
          </BrowserRouter>
        , container)
      })
      expect(screen.getByText('creating a post about africa...')).toBeDefined()
    })

    it("render the post author", () => {
      act(() => {
        render(
          <BrowserRouter>
            <PreviewCard post={testPost} />
          </BrowserRouter>
        , container)
      })
      expect(screen.getByText('Author: Person12345')).toBeDefined()
    })

    it("render the post category", () => {
      act(() => {
        render(
          <BrowserRouter>
            <PreviewCard post={testPost} />
          </BrowserRouter>
        , container)
      })
      expect(screen.getByText('Continent: Africa')).toBeDefined()
    })

    it("render the date posted", () => {
      act(() => {
        render(
          <BrowserRouter>
            <PreviewCard post={testPost} />
          </BrowserRouter>
        , container)
      })
      expect(screen.getByText(`Posted: ${moment(testPost.date_posted).startOf('minute').fromNow()}`)).toBeDefined()
    })

    it("render the date posted", () => {
      act(() => {
        render(
          <BrowserRouter>
            <PreviewCard post={testPost} />
          </BrowserRouter>
        , container)
      })
      expect(screen.getByText('Zulu Nation!......')).toBeDefined()
    })
  })

})

