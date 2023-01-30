import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    // guest navbar
	return (
		<>
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">
                    Traveler's Forum
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-success-emphasis" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/view/all">
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
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">
                                About
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-nav ms-auto">              	
                        <Link to="/login" className="nav-item nav-link text-white">
                            Login
                        </Link>
                        <Link to="/register" className="nav-item nav-link text-white">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
		</>
	)
}

export default NavBar