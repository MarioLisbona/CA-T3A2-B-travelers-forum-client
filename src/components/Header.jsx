import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({ headingText }) => {
	return (
		<div className="p-5 my-4 bg-light rounded-3">
				<h1>{headingText}</h1>
				<p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos quam autem ipsa non placeat amet reiciendis incidunt fugit iure.. At <Link to="https://www.7travelerforum.com.au" className="text-success" target="_blank">
					travelerforum.com
				</Link> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis vitae, voluptate est deleniti ratione! connect with the people around the world.</p>
				<p><Link to="https://www.google.com" target="_blank" className="btn btn-success btn-lg">
					Register Today
					</Link>
				</p>
		</div>
	)
}

export default Header