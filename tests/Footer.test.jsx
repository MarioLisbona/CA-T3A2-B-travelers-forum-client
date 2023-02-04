import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Link } from "react-router-dom"
import { expect } from "vitest"
import React from "react";
import { unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import Footer from '../src/components/Footer'
import TermsOfUse from '../src/components/TermsOfUse'
import Privacy from '../src/components/Privacy'
import Contact from '../src/components/Contact'

describe('Footer Component has correct link and route for terms of service', () => {
  let container = null
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement("div")
      document.body.appendChild(container)

      act(() => {
        render(
          <BrowserRouter>
            <Footer />
            <TermsOfUse />
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

    it('Should contain a link to Terms of Use', () => {
      expect(screen.getByText('Terms of Use')).toBeDefined()
    })

    it('Terms of use link should link to Terms of use Page when clicked', async () => {
      await userEvent.click(screen.getByText('Terms of Use'))
      expect(screen.getByText('Terms of use and Conditions'))
    })
  })

  describe('Footer Component has correct link and route for Privacy Policy', () => {
    let container = null
      beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div")
        document.body.appendChild(container)
  
        act(() => {
          render(
            <BrowserRouter>
              <Footer />
                <Privacy />
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
  
      it('Should contain a link to Privacy Policy', () => {
        expect(screen.getByText('Privacy Policy')).toBeDefined()
      })
  
      it('Terms of use link should link to Terms of use Page when clicked', async () => {
        await userEvent.click(screen.getByText('Privacy Policy'))
        expect(screen.getByText('View our privacy policies'))
      })
    })

    describe('Footer Component has correct link and route for Contact us', () => {
      let container = null
        beforeEach(() => {
          // setup a DOM element as a render target
          container = document.createElement("div")
          document.body.appendChild(container)
    
          act(() => {
            render(
              <BrowserRouter>
                <Footer />
                  <Contact />
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
    
        it('Should contain a link to Contact Us', () => {
          expect(screen.getByText('Contact Us')).toBeDefined()
        })
    
        it('Terms of use link should link to Terms of use Page when clicked', async () => {
          await userEvent.click(screen.getByText('Contact Us'))
          expect(screen.getByText('Connect with us at the links below'))
        })
      })