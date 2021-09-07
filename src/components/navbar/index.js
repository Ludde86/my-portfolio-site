import React from 'react';
import './navbar.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../main';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Layout>
			<Header className="header-color" title="Menu" scroll>
				<Navigation>
					<Link className="link" to="/">
						Home
					</Link>
					<Link className="link" to="/resume">
						Resumé
					</Link>
					<Link className="link" to="/projects">
						Projects
					</Link>
					<Link className="link" to="/about">
						About Me
					</Link>
					<Link className="link" to="/contact">
						Contact
					</Link>
				</Navigation>
			</Header>
			<Drawer title="Menu">
				<Navigation>
					<Link to="/">Home</Link>
					<Link to="/resume">Resumé</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/about">About Me</Link>
					<Link to="/contact">Contact</Link>
				</Navigation>
			</Drawer>
			<Content>
				<div className="page-content" />
				<Main />
			</Content>
		</Layout>
	);
};

export default Navbar;
