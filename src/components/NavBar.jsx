import React from 'react'

const NavBar = () => {
	return (
		<>
		<nav class="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">Traveler's Forum</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link text-success-emphasis" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Browse all Destinations</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Browse By Continent
                            </a>
                            <div class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item text-white" href="#">Asia</a>
                            <a class="dropdown-item text-white" href="#">Africa</a>
                            <a class="dropdown-item text-white" href="#">North America</a>
                            <a class="dropdown-item text-white" href="#">South America</a>
                            <a class="dropdown-item text-white" href="#">Antarctica</a>
                            <a class="dropdown-item text-white" href="#">Europe</a>
                            <a class="dropdown-item text-white" href="#">Australia</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                    <div class="navbar-nav ms-auto">              	
                        <a href="#" class="nav-item nav-link text-white">Login</a>
                        <a href="#" class="nav-item nav-link text-white">Register</a>
                    </div>
                </div>
            </div>
            </nav>
		</>
	)
}

export default NavBar