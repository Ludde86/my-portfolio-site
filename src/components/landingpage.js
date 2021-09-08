import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './landingpage.css';
import myAvatar2 from '../img/avatar-medium-gray2-lighter.png';
import About from './aboutme';
import Contact from './contact';

const Landing = () => {
	return (
		<div style={{ width: '100%', margin: 'auto' }}>
			<div className="landing-container">
				<Contact />
				<About />
			</div>
		</div>
	);
};

export default Landing;
