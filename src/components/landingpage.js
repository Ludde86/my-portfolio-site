import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './landingpage.css';
import myAvatar2 from '../img/avatar-medium-gray2-lighter.png';

const Landing = () => {
	return (
		<div style={{ width: '100%', margin: 'auto' }}>
			<div className="landing-container">
				<div className="contact-info">
					<div className="img-container">
						<img src={myAvatar2} alt="profile" className="avatar" />
					</div>
					<div className="info-container">
						<div className="info">
							<i className="fa fa-phone-square" aria-hidden="true" />
							<text className="info-text">0704608611</text>
						</div>
						<div className="info">
							<i className="fa fa-envelope-square" aria-hidden="true" />
							<text className="info-text">bslbjorn@gmail.com</text>
						</div>
						<div className="info">
							<a
								href="https://www.linkedin.com/in/ludvig-bj%C3%B6rn-4b582417b/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-linkedin-square" aria-hidden="true" style={{ color: '#333' }} />
							</a>
							<text className="info-text">Ludvig Björn</text>
						</div>
						<div className="info">
							<a href="https://github.com/Ludde86" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-github-square" aria-hidden="true" style={{ color: '#333' }} />
							</a>
							<text className="info-text">Ludvig Björn</text>
						</div>
						<div className="skills-container">
							<p className="skills-text">React | React Native | JavaScript | HTML | CSS | Java</p>
						</div>
					</div>
				</div>

				<div className="about-me">
					<p className="about-text">35 år, bor med fru och två barn i Vendelsö.</p>
					<p className="about-text">
						Min karriär som utvecklare startade 2017 då jag genomförde två distanskurser, Programmering
						Grund- och Fortsättningskurs i Java. Året därpå antog jag en tvåårig yh-utbildning som
						Javautvecklare på IT-Högskolan i Liljeholmen.
					</p>
					<p className="about-text">
						Vid sidan utav studierna har jag ägnat mig åt JavaScript och React/React Native, där jag
						utvecklat både hemsidor och mobilaplikationer.
					</p>
					<p className="about-text">
						Mitt senaste projekt är en app utvecklat med React Native, en parkeringstjänst (likt easypark)
						som tidigare enbart var webbaserad. Tjänsten, som har aktiva kunder, är inriktad till
						företag/föreningar.
					</p>

					<p className="greeting-text">
						Tveka inte på att höra av er om ni har frågor eller funderingar.
						<br />
						Med vänliga hälsningar, Ludvig Björn
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
