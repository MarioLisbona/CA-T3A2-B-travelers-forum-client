<img src="./docs/logo1.png" width="500" alt="landing page mobile">


A MERN Application built by Callum Rowstan and Mario Lisbona
<br>
<img src="./docs/icons8-github-30.png" height="20"> [Callum Rowstan](https://github.com/CallumRowston)
<br>
<img src="./docs/icons8-github-30.png" height="20"> [Mario Lisbona](https://github.com/MarioLisbona)

Traveller's Forum is an online forum where members can share travel stories and information on their favorite parts of the world. Our goal is to create a sense of community among global travellers through shared experiences, adventures and cultures. Guests can browse and view posts to the forum. Guests can also register as a member and contribute to the forum with their own posts. Members can comment on other posts and give them a star rating. 

Traveller's Forum is deployed on Netlify and Railway. It was developed using the MERN stack.

#

## Links

🌏 Deployed Application: [https://travellersforum.netlify.app/](https://travellersforum.netlify.app/)

⚙️ Staging Environment: [https://staging--travellersforum.netlify.app/](https://staging--travellersforum.netlify.app/)

💾 Server Repo: [https://github.com/CallumRowston/CA-T3A2-B-travelers-forum-server](https://github.com/CallumRowston/CA-T3A2-B-travelers-forum-server)

💻 Client Repo: [https://github.com/MarioLisbona/CA-T3A2-B-travelers-forum-client](https://github.com/MarioLisbona/CA-T3A2-B-travelers-forum-client)

📄 Part A Documentation: [https://github.com/MarioLisbona/CA-T3A2-part-A](https://github.com/MarioLisbona/CA-T3A2-part-A)

## Installation

A production installation is available at [https://travellersforum.netlify.app/](https://travellersforum.netlify.app/)

Follow the instructions below to install the server and client locally on your machine

### System requirements

- NodeJS version v18.12.1

### Server Installation

- Create a directory called `travellers-forum` and navigate into that directory.
  - `$ mkdir travellers-forum && cd travellers-forum`
- Once in the `/travellers-forum` directory, in the terminal run the following command:
  - `git clone git@github.com:CallumRowston/CA-T3A2-B-travelers-forum-server.git`
- Navigate to the server folder:
  - `$ cd CA-T3A2-B-travelers-forum-server`
- Install npm packages
  - `npm install`
- If a `.env` file has not been provided to you, create one and fill it out using the fields provided in the `.env.sample` file
- Run the server with the following command:
  - `npm run dev`
- This will run the server using nodemon

The API can now be accessed using Postman and `localhost:4001/`

### Client Installation

- Open the terminal and navigate to the `travellers-forum` folder
  - `$ cd travellers-forum`
- Once in the `/travellers-forum` directory, in the terminal run the following command:
  - `git clone git@github.com:MarioLisbona/CA-T3A2-B-travelers-forum-client.git`
- Navigate to the client folder:
  - `$ cd CA-T3A2-B-travelers-forum-client`
- Install npm packages
  - `npm install --legacy-peer-deps`
- run the server with the following command:
  - `npm run dev`
- By default the server will run at `http://localhost:5173/`
  - However if this port is already in use another port will be provided
- You will also be provided a link in the terminal to the port where the client server is running:

  ![server port](docs/vite-localhost.png)

You will now be able to view all the posts on the App. To create your own posts, rate posts by others, comment on posts and register and login.

## API Endpoints

API Endpoint documentation can be found [here](docs/apiendpoints.md)

## Server Libraries and Dependencies

### Server Libraries

`mongoose ^6.8.4"`- An object data modelling (ODM) library for use with MongoDB. Used to build schema and models that enforce structure at the application layer.

`express ^4.18.2` - A Node JS based minimal back end web framework for building REST APIs. Used to build routes to handle HTTP requests.

`dotenv ^16.0.3` - Used to load variables stored in `.env` files into `process.env`. Allows for environment configuration to be kept separate from the code and protect database credentials and JWT secret key.

`cors ^2.8.5"` - Provides middleware to ExpressJS to enable cross origin requests that are normally forbidden.

`validator ^13.7.0` - Library for validating and sanitising strings.

`express-validator ^6.14.3` - Set of ExpressJS middlewares that wrap `validator` and provide further validation and sanitizer functions. Used to validate data in incoming requests.

`jsonwebtoken ^9.0.0` - An open standard for sharing security information between client and server. Used for user authentication by issuing a JWT to the client upon successful login by digitally signing information using a secret key and cryptographic algorithm. This is validated by the server when the user attempts to access protected routes.

`bcrypt ^5.1.0` - A password hashing function used for securely storing passwords in the database.

### Server Development Dependencies

`jest ^29.4.1` - A JavaScript testing framework for writing tests and running automated tests.

`supertest ^6.3.3` - A Node.js library for testing APIs. Provides high level abstraction for testing.

`nodemon ^2.0.20` - Used for ease of development by automatically restarting application on file change.

## Client Libraries and Dependencies

### Client Libraries

`react: ^18.2.0` - React is a Javascript library that provides a declarative, efficient and flexible way to build user interfaces for an application. It allows developers to use multiple small, isolated pieces of code, called 'components' to create complex and interactive UI's.

`react-dom: ^18.2.0` - React-dom is a package that provides a Virtual DOM which is a copy of the actual DOM structure that is used to track changes that are made by the user. Those changes are eventually reflected in the browser's DOM structure. The package provides developers with methods to maniupalte the virual dom, inlcuding `.render()` and `.findDOMNode`

`react-router-dom: ^6.7.0` - React Router is used to create an SPA (Single Page Application). It provides a library that lets developers take advantage of client-side rendering routing. This means that different components can be rendered within the app for each URL without having to fetch a new page each time.

`@fortawesome/fontawesome-svg-core: ^6.2.1`

`@fortawesome/free-solid-svg-icons: ^6.2.1`

`@fortawesome/react-fontawesome: ^0.2.0`

The Font Awesome libraries are used to add the icons for the user registration form. The registration form has front-end input validation and the icons are used to inform the user if they have not entered a valid input.

`moment: ^2.29.4` -  Moment is used to format the dates on each post when viewed as a full page. It is also used to provide information on the preview cards about how long ago each post was made.

### Client Development Dependencies

`vite": "^4.0.0` - Vite allows developers to setup and build a front-end development environment for React that contains a dev server. It also has the feature of a Hot Module Reload which updates the server with changes to the codebase.

`@testing-library/jest-dom: ^5.16.5`

`@testing-library/react: ^13.4.0`

`@testing-library/react-hooks: ^8.0.1`

`@testing-library/user-event: ^14.4.3`

`@types/react: ^18.0.26`

`@types/react-dom: ^18.0.9`

`@vitejs/plugin-react: ^3.0.0`

`jsdom: ^21.1.0`

`vitest: ^0.28.3`

These packages are used to run unit tests and integration tests on the application.
They need to be installed with the flag `--legacy-peer-deps` appended to CLI command.

## Application Screenshots

**Register with invalid username and password**

![Register with invalid username and password](./docs/register-incorrect-user-pass.png)

**Register with invalid password**

![Register with invalid password](./docs/register-incorrect-pass.png)

**Register with invalid password match**

![Register with invalid password match](./docs/register-incorrect-pass-match.png)

**Register with valid input**

![Register with valid input](./docs/register-correct-input.png)

**View Post when not logged in**

![View Post when not logged in](./docs/view-post-not-logged-in.png)

**User logged in with comment box and rate post button disabled**

![User logged in with comment box and rate post button disabled](./docs/logged-in-select%20rating-submit-disabled.png)


**User logged in with comment box and rate post button enabled**

![User logged in with comment box and rate post button enabled](./docs/logged-in-select%20rating-submit-enabled.png)

**Post rated successfully**

![Post rated successfully](./docs/logged-in-select%20rating-after-submit-updated-rating.png)

**Edit post**

![Edit post](./docs/edit-post.png)

**Edit comment**

![Edit comment](./docs/edit-comment.png)

**Landing page - latest posts**

![Landing page - latest posts](./docs/landingpage-latest%20posts.png)

**My posts**

![My posts](./docs/my-posts.png)

**My posts button functionality**

![My posts button functionality](./docs/my-post-buttons.png)

**JWT expired**

![JWT expired](./docs/jwt-expired.png)

**Browse category**

![Browse category](./docs/browse-category.png)


## Testing

Extensive testing has been carried out in both Chrome and Firefox running on Windows and MacOS and various mobile devices and screen sizes. Automated testing has been developed using Vitest and Jest. Manual testing was carried out using Postman and running the application locally and via deployment.

Manual Testing During Development, Staging and Production: [Click Here](https://docs.google.com/spreadsheets/d/1ZN6NrLZgrfrI0-DRtoB7dR9KK781k1nl1RJyCdUfHI8/edit#gid=0)

Further Manual Testing for production app: [Click Here](docs/testing-production.md)

Postman Testing: [Click Here](docs/testing-postman.md)

Font-end testing: Automated testing to check that the correct structure and output is present on the PreviewCard component. Automated testing for conditional rendering of the username in the navbar is done in a second test. A third test checks that the links in the footer are displayed and that when they are clicked they route to the correct component. [Click Here](https://github.com/MarioLisbona/CA-T3A2-B-travelers-forum-client/tree/main/tests)

Back-end testing: Automated tests were written to test a variety of controllers, middleware and routes as an integrated process in two common workflows; *Member login, post creation, edit and delete* and *member login, comment creation, edit and delete.* Unit tests were also written to cover functionality and validation of various post, comment and auth routes. [Click Here](https://github.com/CallumRowston/CA-T3A2-B-travelers-forum-server/tree/main/tests)

## Project Management & Planning

Our project planning and management centered around an Agile workflow using Trello to organise and delegate tasks. The initial planning and Kanban board set up was undetaken in Part A, which can be found [here](https://github.com/MarioLisbona/CA-T3A2-part-A).

We planned out the requirements to develop the minimum viable product and added these tasks as Trello cards, delegating each card to a group member and assigning it as a server or client requirement. Since we were a group of two, we mainly delegated tasks so that one of us would be responsible for the server and one of us for the client, with the expectation that if tasks were finished early the other member would jump across to help with the remaining tasks.

Throughout the second week of development we ensured consistent contact by talking on Discord and providing updates on tasks completed or being worked on. This ensured both the server and client were being developed with awareness of one another and allowed for us to collaboratively negotiate development challenges as they arose. It also allowed for quick decision making for smaller aspects of the design that may not have been covered.

Git and GitHub was utilised for source control. Features were developed in their own branch of each repository and tested before being merged into the main branch for production.

**Sprint 1 - Basic App Functionality**

Work began by setting up the basic app functionality. This included rendering the homepage, categories and posts on the client side. On the server side it involved database setup and configuration and creating routes to get posts. It also included creating seed data so that testing could begin straight away and throughout the duration of the project.

**Sprint 2 - Register & Login, Post CRUD**

Register and login functionality was created on the client side. This included conditionally rendering components based on variables including whether a user was logged in or not, if they were the author of a post or comment and whether they had already submitted a rating for a post. Components such as the navbar and buttons for register and login would be rendered differently when the user was logged in, as well as providing access to the users own posts. Forms and buttons and their associated functionality were also added to allow post creation, updates and deletion. On the server side, routes were created to match the client functionality with login and register routes, and full CRUD functionality for posts. Relationships had to be created to ensure the owner of a post could be identified so that only they could edit or delete their own post.

**Sprint 3 - Comment CRUD**

This sprint was very similar to the previous one. Much of the functionality of the post CRUD could be easily carried over to comments, with minor changes. Similar to posts, the comment feature would render differently depending on if the user was logged in, and if the user was the owner of the comment.

**Sprint 4 - Authentication - finish MVP**

To complete the MVP we added JWT authentication. This came with many hurdles such as how to store the token on the client and the handling of all possible errors associated with authentication on the server side. We also added popup modals to display if the users token expired during their session to prompt them to login and redirect them to the login page.

**Sprint 5 - Formal Testing**

Extensive testing was carried out. A separate database was setup for testing so as to not make any unnecessary changes to the development or production databases. Testing included writing automated unit and integration tests for both client and server, as well as meticulous manual testing of the application.

**Sprint 6 - Rating Feature**

As we had completed our initial plan and had rigorously tested the MVP, we agreed we had time to implement an additional feature. We began a final sprint to implement the  ratings feature to allow users to rate posts. This came together very quickly as our knowledge and familiarity with the application was very strong at this point in the project.

## Trello

[Link to Trello Workspace](https://trello.com/b/LD1ZUwnS/t3a2-part-a-b)

Screenshots of our Trello board were taken in the morning and afternoon of each day throughout the entire development of the project.

<details>

<summary>Week 1</summary>

<br>

![Trello1](docs/trello-screenshots/1.TrelloScreenShot-23-jan-morning.png)
![Trello2](docs/trello-screenshots/2.TrelloScreenShot-23-jan-afternoon.png)
![Trello3](docs/trello-screenshots/3.TrelloScreenShot-24-jan-morning.png)
![Trello4](docs/trello-screenshots/4.TrelloScreenShot-24-jan-afternoon.png)
![Trello5](docs/trello-screenshots/5.TrelloScreenShot-25-jan-morning.png)
![Trello6](docs/trello-screenshots/6.TrelloScreenShot-25-jan-afternoon.png)
![Trello7](docs/trello-screenshots/7.TrelloScreenShot-26-jan-morning.png)
![Trello8](docs/trello-screenshots/8.TrelloScreenShot-26-jan-afternoon.png)
![Trello9](docs/trello-screenshots/9.TrelloScreenShot-27-jan-afternoon.png)
![Trello10](docs/trello-screenshots/10.TrelloScreenShot-28-jan-afternoon.png)
![Trello11](docs/trello-screenshots/11.TrelloScreenShot-29-jan-morning.png)
![Trello12](docs/trello-screenshots/12.TrelloScreenShot-29-jan-afternoon.png)

</details>

<details>

<summary>Week 2</summary>

<br>

![Trello13](docs/trello-screenshots/13.TrelloScreenShot-30-jan-morning.png)
![Trello14](docs/trello-screenshots/14.TrelloScreenShot-30-jan-afternoon.png)
![Trello15](docs/trello-screenshots/15.TrelloScreenShot-31-jan-morning.png)
![Trello16](docs/trello-screenshots/16.TrelloScreenShot-31-jan-afternoon.png)
![Trello17](docs/trello-screenshots/17.TrelloScreenShot-1-feb-morning.png)
![Trello18](docs/trello-screenshots/18.TrelloScreenShot-1-feb-afternoon.png)
![Trello19](docs/trello-screenshots/19.TrelloScreenShot-2-feb-morning.png)
![Trello20](docs/trello-screenshots/20.TrelloScreenShot-2-feb-afternoon.png)
![Trello21](docs/trello-screenshots/21.TrelloScreenShot-3-feb-morning.png)
![Trello22](docs/trello-screenshots/22.TrelloScreenShot-3-feb-afternoon.png)
![Trello23](docs/trello-screenshots/23.TrelloScreenShot-4-feb-morning.png)
![Trello24](docs/trello-screenshots/24.TrelloScreenShot-4-feb-afternoon.png)
![Trello22](./docs/trello-screenshots/25.TrelloScreenShot-5-feb-afternoon.png)

</details>
