import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../main';
import './navbar.css';

const Navbar = () => {
	return (
		<div className="app-container">
			<header>
				<nav>
					<div className="links-container">
						<a className="link" href="/">
							Hem
						</a>
						<a className="link" href="/resume">
							CV
						</a>
					</div>
					<div className="links-container">
						<a className="link" href="/projects">
							Design
						</a>
					</div>
					<div className='navbar_button-container search-button'>
						<p>x</p>
					</div>
				</nav>

				<div className='navbar_button-container menu-button'>
					<input type="checkbox" />
					<span className='first-line'></span>
					<span className='second-line'></span>
					<span className='third-line'></span>
				</div>
			</header>



			{/*
			<Drawer className="header-color" title="Menu">
				<Navigation>
					<Link className="link-text" to="/">
						Home
					</Link>
					<Link to="/resume">Resumé</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/about">About Me</Link>
					<Link to="/contact">Contact</Link>
				</Navigation>
			</Drawer>
			*/}

			<div className='app-container'>
				<Main />
			</div>
		</div>
	);
};

export default Navbar;
