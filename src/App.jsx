import React, { useEffect, useState } from 'react'
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
import './HeroImage.css'
import MyPosts from './components/MyPosts'
import CreateAPost from './components/CreateAPost'
import FullPagePost from './components/FullPagePost'
import PageNotFound from './components/PageNotFound'

const App = () => {

  const forumMember = false

  const users = [
    {
      email: 'mario.lisbona@gmail.com',
      username: 'Mario',
      password: 'password123'
    },
    {
      email: 'ali.lisbona@gmail.com',
      username: 'Mario',
      password: 'Alisha999999'
    },
    {
      email: 'amtaubner@gmail.com',
      username: 'Aligirl90',
      password: 'ali123'
    },
    {
      email: 'coda@cat.com',
      username: 'Coda',
      password: 'coda123'
    },
  ]

  function AddUser(email, username, password) {
    const newUser = {
      email: email,
      username: username,
      password: password
    }

    console.log(users)

    users.push(newUser)

    console.log(users)
  }

  function loginDetails(email, password) {
    console.log(`User attempting to login\n ${email}: ${password}`)
  }


  const seedPosts = [
    {
        "_id": "63cd13d890ac0093883f03c2",
        "title": "My trip to Brazil",
        "author": "Callum",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "South America",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c3",
        "title": "My trip to the UK",
        "author": "Mario",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "Europe",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c4",
        "title": "Backpacking across Europe",
        "author": "Chuck Norris",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "Europe",
        "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c5",
        "title": "Looting Europe",
        "author": "Jack Sparrow",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "Europe",
        "content": "Yar Pirate Ipsum. Reef sails strike colors code of conduct parley sloop yardarm square-rigged mizzen loaded to the gunwalls keel. Bilge rat scuttle gangway heave down piracy nipper pirate mizzen topmast deadlights. Aft case shot lugsail Gold Road scourge of the seven seas mutiny skysail reef bowsprit Admiral of the Black. Man-of-war yardarm plunder Gold Road case shot capstan poop deck grog blossom clap of thunder topsail. Jack Tar coffer weigh anchor lateen sail warp crimp wench square-rigged careen pirate. Ye hearties interloper cable schooner ho avast tackle booty heave down. Prow reef sails Davy Jones' Locker spike red ensign boom scurvy ahoy belay Sea Legs. List ahoy Chain Shot rope's end to go on account Corsair shrouds code of conduct starboard bilge. Jack Ketch crow's nest topmast run a rig stern Pieces of Eight Jolly Roger Sail ho cog grog blossom.",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c6",
        "title": "I found a dope hat in Turkey",
        "author": "Florence",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "Europe",
        "content": "Oh. You need a little dummy text for your mockup? How quaint. I bet you're still using Bootstrap too…Freegan before they sold out poke taxidermy, pop-up vaporware vegan pinterest. Messenger bag pitchfork la croix gluten-free. Activated charcoal vexillologist iPhone, man braid bespoke tote bag kogi man bun adaptogen sustainable ethical intelligentsia vape. Tumblr sriracha umami, slow-carb typewriter celiac quinoa ethical keytar poke cloud bread hexagon kitsch tbh organic.",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c7",
        "title": "This place is full of happy little trees...",
        "author": "BoB Ross",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "Europe",
        "content": "I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Just go back and put one little more happy tree in there. Everybody's different. Trees are different. Let them all be individuals. We'll put some happy little leaves here and there. These things happen automatically. All you have to do is just let them happen. Everyone wants to enjoy the good parts - but you have to build the framework first. Let's do that again. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. If you do too much it's going to lose its effectiveness. If you don't think every day is a good day - try missing a few. You'll see. In life you need colors. Fluff it up a little and hypnotize it.  We can fix anything. Automatically, all of these beautiful, beautiful things will happen. There we go. Look at them little rascals.",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c4",
        "title": "Backpacking across America",
        "author": "Chuck Norris",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "North America",
        "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c4",
        "title": "Backpacking across South America",
        "author": "Chuck Norris",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "South America",
        "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c4",
        "title": "Bolivar!@@@@@@@@@@@@@@!@",
        "author": "Chuck Norris",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "South America",
        "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c4",
        "title": "Backpacking across penguins",
        "author": "Chuck Norris",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "Antarctica",
        "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
        "comments": [],
        "__v": 0
    },
    // {
    //     "_id": "63cd13d890ac0093883f03c4",
    //     "title": "Backpacking across the Zimbabwae",
    //     "author": "Chuck Norris",
    //     "date_posted": "2023-01-22T10:45:44.497Z",
    //     "category": "Africa",
    //     "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
    //     "comments": [],
    //     "__v": 0
    // },
    {
        "_id": "63cd13d890ac0093883f03c4",
        "title": "fightuing string rays",
        "author": "Some bogan",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "Australia",
        "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63cd13d890ac0093883f03c4",
        "title": "Asia and south east asia",
        "author": "Chuck Norris",
        "date_posted": "2023-01-22T10:45:44.497Z",
        "category": "Asia",
        "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
        "comments": [],
        "__v": 0
    }
]


  const member1 = {
    name: 'Mario',
    age: 43
  }

  const member2 = {
    name: 'Ali',
    age: 32
  }

  const member3 = {
    name: 'Coda',
    age: 3
  }

  const member4 = {
    name: 'Someone Else',
    age: 44
  }


  const [posts, setPosts] = useState(seedPosts)

  // useEffect(() => {
  //   async function fetchPosts() {
  //     const result = await fetch("https://indigo-stocking-production.up.railway.app/posts")
  //     const data = await result.json()
  //     setPosts(data)
  //   }

  //   fetchPosts()
  // }, [])



    const europePosts = posts.filter(post => post.category == 'Europe')
    const australiaPosts = posts.filter(post => post.category == 'Australia')
    const asiaPosts = posts.filter(post => post.category == 'Asia')
    const africaPosts = posts.filter(post => post.category == 'Africa')
    const nthAmericaPosts = posts.filter(post => post.category == 'North America')
    const sthAmericaPosts = posts.filter(post => post.category == 'South America')
    const antarcticaPosts = posts.filter(post => post.category == 'Antarctica')


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage forumMember={forumMember} memberName={member1.name} />} />
          <Route path="/login" element={<Login forumMember={forumMember} loginDetails={loginDetails}/>} />
          <Route path="/register" element={<Register forumMember={forumMember} addUser={AddUser} />} />
          <Route path="/view/all" element={<ViewAll forumMember={forumMember} allPosts={posts} />} />
          <Route path="/view/continent/asia" element={<Asia forumMember={forumMember} asiaPosts={asiaPosts} />} />
          <Route path="/view/continent/africa" element={<Africa forumMember={forumMember} africaPosts={africaPosts} />} />
          <Route path="/view/continent/nth-america" element={<NthAmerica forumMember={forumMember} nthAmericaPosts={nthAmericaPosts} />} />
          <Route path="/view/continent/sth-america" element={<SthAmerica forumMember={forumMember} sthAmericaPosts={sthAmericaPosts} />} />
          <Route path="/view/continent/antarctica" element={<Antarctica forumMember={forumMember} antarcticaPosts={antarcticaPosts} />} />
          <Route path="/view/continent/europe" element={<Europe forumMember={forumMember} europePosts={europePosts} />} />
          <Route path="/view/continent/australia" element={<Australia forumMember={forumMember} australiaPosts={australiaPosts} />} />
          <Route path="/about" element={<About forumMember={forumMember} />} />
          <Route path="/contact" element={<Contact forumMember={forumMember} />} />
          <Route path="/terms" element={<TermsOfUse forumMember={forumMember} />} />
          <Route path="/privacy" element={<Privacy forumMember={forumMember} />} />
          <Route path={"/posts"} element={<MyPosts forumMember={forumMember} />} />
          <Route path={"/posts/create"} element={<CreateAPost forumMember={forumMember} />} />
          <Route path={"/sample-post"} element={<FullPagePost forumMember={forumMember} />} />
          <Route path='*' element={<PageNotFound forumMember={forumMember} />} />
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App