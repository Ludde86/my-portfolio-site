import React from 'react';
import About from './aboutme';
import Contact from './contact';
import './landingpage.css';

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
