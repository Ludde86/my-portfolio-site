import React from 'react';
import './navbar.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../main';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="app-container">
			<Navigation className="navbar-container">
				<Link to="/">
					<text className="link-text">Hem</text>
				</Link>
				<Link className="link" to="/resume">
					<text className="link-text">CV</text>
				</Link>
				<Link className="link" to="/projects">
					<text className="link-text">Projekt</text>
				</Link>
				{/*
				<Link className="link" to="/about">
					<text className="link-text">Om Mig</text>
				</Link>
				<Link className="link" to="/contact">
					<text className="link-text">Kontakta Mig</text>
				</Link>
				*/}
			</Navigation>
			<div className="navbar-border" />

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
