import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../main';
import './navbar.css';

const Navbar = () => {
	return (
		<div className="app-container">
			<div className="fixed-navbar">
				<div className="navbar-container">
					<div className="links-container">
						<Link className="link link-text" to="/">
							Hem
						</Link>
						<Link className="link link-text" to="/resume">
							CV
						</Link>

						<Link className="link link-text" to="/projects">
							Design
						</Link>

						{/*
							<Link className="link" to="/dictionary">
							<text className="link-text">Ordlista</text>
							</Link>
						*/}
					</div>
					<div className="navbar-border" />
				</div>
			</div>

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

			<div>
				<Main />
			</div>
		</div>
	);
};

export default Navbar;
