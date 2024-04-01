import React from 'react';
import About from './aboutme';
import Contact from './contact';
import './landingpage.css';

const Landing = () => {
	return (
		<div className="landing-container">
			<Contact />
			<About />
			<div className="skills-container">
				<text className="skills-text">React | React Native | JavaScript | HTML | CSS | Java</text>
			</div>
		</div>
	);
};

export default Landing;
