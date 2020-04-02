import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="demo-big-content">
			<Layout>
				<Header className="header-color" title="< Menu" scroll style={{ color: 'black' }}>
					<Navigation>
						<Link to="/" style={{ color: 'black' }}>
							Home
						</Link>
						<Link to="/resume" style={{ color: 'black' }}>
							Resumé
						</Link>
						<Link to="/projects" style={{ color: 'black' }}>
							Projects
						</Link>
						<Link to="/about" style={{ color: 'black' }}>
							About Me
						</Link>
						<Link to="/contact" style={{ color: 'black' }}>
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
		</div>
	);
}

export default App;
