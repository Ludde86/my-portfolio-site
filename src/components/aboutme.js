import React from 'react';
import './aboutme.css';

const About = () => {
	return (
		<div className="about-me">
			<p className="about-text">
				Min karriär som utvecklare startade 2017 då jag genomförde två distanskurser, Programmering Grund- och
				Fortsättningskurs i Java. Året därpå antog jag en tvåårig yh-utbildning som Javautvecklare på
				IT-Högskolan i Liljeholmen.
			</p>
			<p className="about-text">
				Vid sidan utav studierna ägnar jag mig åt JavaScript och React/React Native, där jag utvecklar både
				hemsidor och mobilaplikationer.
			</p>
			<p className="about-text">
				I mitt senaste projekt har jag konverterat en webbaserad parkeringstjänst (likt easypark) till en
				mobilverision (mobilapplikation) som är utvecklat i React Native. Tjänsten har aktiva kunder och är
				inriktad till företag/föreningar som drivs utav en egenföretagare.
			</p>

			<p className="about-text">Tveka inte på att höra av dig om du har frågor eller funderingar.</p>

			<p className="greeting-text">Med vänliga hälsningar, Ludvig Björn</p>
		</div>
	);
};

export default About;
