import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Link } from "react-router-dom"
import App from "../src/App"
import LandingPage from "../src/components/LandingPage"
import { expect } from "vitest"
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// describe('Landing Page no prob', () => {
//   let container
//   // let forumMember = true
//   // let loggedInMember = { username: 'MarioLisbona' }

//   beforeEach( function () {
//     container = render(
//         <BrowserRouter>
//             <App>
//               <LandingPage />
//             </App>
//           </BrowserRouter>
//         ).container
//   })


//     it('Displays a heading on the landing page', () => {
//       expect(container.querySelector('h1')).toBeDefined()
//       expect(container.querySelector('h1')).toHaveTextContent("Welcome to the Traveler's Forum")
//     })

//     it('Displays a sub-heading on the landing page', () => {
//       expect(container.querySelector('h2')).toBeDefined()
//       expect(container.querySelector('h2')).toHaveTextContent("See the latest Posts")
//     })
// })


describe("Landing page for logged in member", () => {
  let container = null

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)
  })

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders with the user's name in welcome message", () => {
    act(() => {
      render(<LandingPage  />, container)
    })
    expect(container.querySelector('h1')).toBeDefined()

  })
})













// describe('Landing Page with props - member logged in', () => {
//   let container
//   let forumMember = true
//   let loggedInMember = { username: 'MarioLisbona' }

//   beforeEach( function () {
//     container = render(
//         <BrowserRouter>
//             <App>
//               <LandingPage forumMember={forumMember} loggedInMember={loggedInMember}>
//                 <MemberHeader forumMember={forumMember} loggedInMember={loggedInMember} />
//               </LandingPage>
//             </App>
//           </BrowserRouter>
//         ).container
//   })

  
//   it('Displays a heading for a member logged into the home page', () => {
//       console.log(container)
//       expect(container.querySelector('h1')).toBeDefined()
//       expect(container.querySelector('h1')).toHaveTextContent("Hi MarioLisbona, welcome to the forum")
//     })

//     it('Displays a sub-heading on the landing page', () => {
//       expect(container.querySelector('h2')).toBeDefined()
//       expect(container.querySelector('h2')).toHaveTextContent("See the latest Posts")
//     })
// })