import React from 'react';
import './aboutme.css';

const About = () => {
	return (
		<div className="about-me">
			<p className="about-text">35 år, bor med fru och två barn i Vendelsö.</p>
			<p className="about-text">
				Min karriär som utvecklare startade 2017 då jag genomförde två distanskurser, Programmering Grund- och
				Fortsättningskurs i Java. Året därpå antog jag en tvåårig yh-utbildning som Javautvecklare på
				IT-Högskolan i Liljeholmen.
			</p>
			<p className="about-text">
				Vid sidan utav studierna har jag ägnat mig åt JavaScript och React/React Native, där jag utvecklat både
				hemsidor och mobilaplikationer.
			</p>
			<p className="about-text">
				Mitt senaste projekt är en mobilapp utvecklat med React Native, en parkeringstjänst (likt easypark) som
				tidigare enbart var webbaserad. Tjänsten, som har aktiva kunder, är inriktad till företag/föreningar.
			</p>

			<p className="greeting-text">
				Tveka inte på att höra av er om ni har frågor eller funderingar.
				<br />
				Med vänliga hälsningar, Ludvig Björn
			</p>
		</div>
	);
};

export default About;
