import React from 'react'
import { Link } from 'react-router-dom'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo1.png"


const MemberNavBar = ({ logoutMember, loggedInMember }) => {
    
    // display navbar for members
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container-fluid">
              <Link className="navbar-brand ms-0 ps-0" to="/">
                <img src={logo} width="200" height="40" alt=""></img>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link className="nav-link text-white" to="../view/all">
                              Browse all Destinations
                          </Link>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Browse By Continent
                          </a>
                          <div className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item text-white" to="/view/continent/asia">
                                Asia
                            </Link>
                            <Link className="dropdown-item text-white" to="/view/continent/africa">
                                Africa
                                </Link>
                            <Link className="dropdown-item text-white" to="/view/continent/nth-america">
                                North America
                            </Link>
                            <Link className="dropdown-item text-white" to="/view/continent/sth-america">
                                South America
                            </Link>
                            <Link className="dropdown-item text-white" to="/view/continent/antarctica">
                                Antarctica
                            </Link>
                            <Link className="dropdown-item text-white" to="/view/continent/europe">
                                Europe
                            </Link>
                            <Link className="dropdown-item text-white" to="/view/continent/australia">
                                Australia
                            </Link>
                          </div>
                      </li>
                  </ul>
                  <div className="navbar-nav ms-auto">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown me-4">
                        <a className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faUser} className="me-2"/>
                        {loggedInMember.username}
                          </a>
                          <div className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item text-white" to="/posts">
                                    My Posts
                                </Link>
                                <Link className="dropdown-item text-white" to="/posts/new">
                                    Create a Post
                                    </Link>
                                <Link className="dropdown-item text-white" to="/about">
                                    About
                                </Link>
                                <Link onClick={logoutMember} className="dropdown-item text-white" to="/">
                                    Log out
                                </Link>
                            </div>
                        </li>
                    </ul>
                  </div>
              </div>
          </div>
      </nav>
    </>
  )
}

export default MemberNavBar