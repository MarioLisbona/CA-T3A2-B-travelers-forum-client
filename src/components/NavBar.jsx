import React from 'react'

const NavBar = () => {
	return (
		<>
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/">Traveler's Forum</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-success-emphasis" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="../view/all">Browse all Destinations</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Browse By Continent
                            </a>
                            <div className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item text-white" href="/view/continent/asia">Asia</a>
                            <a className="dropdown-item text-white" href="/view/continent/africa">Africa</a>
                            <a className="dropdown-item text-white" href="/view/continent/nth-america">North America</a>
                            <a className="dropdown-item text-white" href="/view/continent/sth-america">South America</a>
                            <a className="dropdown-item text-white" href="/view/continent/antarctica">Antarctica</a>
                            <a className="dropdown-item text-white" href="/view/continent/europe">Europe</a>
                            <a className="dropdown-item text-white" href="/view/continent/australia">Australia</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <div className="navbar-nav ms-auto">              	
                        <a href="/login" className="nav-item nav-link text-white">Login</a>
                        <a href="/register" className="nav-item nav-link text-white">Register</a>
                    </div>
                </div>
            </div>
            </nav>
		</>
	)
}

export default NavBar