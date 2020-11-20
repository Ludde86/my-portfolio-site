import React from 'react';

const About = () => {
	return (
		<div className="about-content">
			<h5>Sekretesspolicy för Create Your List: </h5>

			<p>Denna app behandlar ej några känsliga användaruppgifter och data.</p>
			<p>
				Du skapar ett anonymt konto med endast ett användarnamn och lösenord. Helt utan personuppgifter,
				kontaktuppgifter och dylikt.
			</p>

			<h5>Kort om mig: </h5>
			<p>
				Jag är en student som under rådande omständigheter sitter hemma och nöter, i princip måndag till fredag,
				för att så småningom hitta ett jobb som utvecklare inom programmering.
			</p>
			<p>
				Jag har Java som grund, men kan även JavaScript då jag den senaste tiden suttit en hel del med React,
				där jag byggt simpla hemsidor (t.ex. denna sida), och en simpel att-göra-lista/inköpslista som jag
				sitter med just nu *länk*. Att-göra-projektet är byggt med express, React context och MangoDB, och
				används flitigt av mig och min fru här hemma.
			</p>
			<p>Tanken i framtiden är att använda React på klientsidan och Java/Spring på serversidan</p>
			<h5>Utvecklingsområden: </h5>
			<p>
				<ul>
					<h6 style={{ textDecoration: 'underline' }}>React: </h6>
					<li>Express</li>
					<li>Redux (med redux-saga)</li>
					<li>Validations (med express-validator och Formik)</li>
					<li>Authentication (med tokens)</li>
					<li>Att "deploya" fler egna project</li>
					<li>Bootstrap och Material-UI</li>
					<h6 style={{ textDecoration: 'underline' }}>Java: </h6>
					<li>Spring</li>
				</ul>
			</p>
			<h5>Notering: </h5>
			<p>
				Har en praktikperiod kvar på tre månader att slutföra, då via utbildningen, och den räknar jag med att
				påbörja nu till hösten. Hör gärna av er om ni vill veta mer, eller om det är något ni funderar på.
			</p>
			<p style={{ fontWeight: 'bold' }}>Med vänliga hälsningar, Ludvig Björn</p>
		</div>
	);
};

export default About;
