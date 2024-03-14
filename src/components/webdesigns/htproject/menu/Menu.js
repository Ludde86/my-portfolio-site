import React from 'react';
import './menu.css';

const Menu = () => (
	<div className="menu">
		{/*
		<p>
		<a href="#home">Hem</a>
		</p>
	*/}

		{/*
			<p>
			<a href="#blog">Nyheter</a>
			</p>
		*/}
		{/*
			<p>
			<a href="#wqlosr">Qlosr?</a>
			</p>
		*/}
		<div className="menu__links">
			<span className="menu__links-text">Projekt</span>
			<span className="menu__links-text">Projektledning</span>
			<span className="menu__links-text">Projekteringsledning</span>
			<span className="menu__links-text">Installationsledning</span>
			<span className="menu__links-text">Byggekonomi</span>
			<span className="menu__links-text">Miljö</span>
			<span className="menu__links-text">Fastighetskonsult</span>

			<span className="menu__links-text" href="#footer">
				Kontakt
			</span>
		</div>
	</div>
);

export default Menu;
