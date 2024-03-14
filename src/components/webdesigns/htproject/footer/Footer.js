import React from 'react';
import './footer.css';

import { MdKeyboardArrowRight } from 'react-icons/md';

const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="footer__section">
				<h5>HEDSTRÖM & TAUBE | GRUPPEN</h5>
				<p>Kommendörsgatan 30</p>
				<p>114 48 Stockholm</p>
				<p>Tel 08-555 150 00</p>
			</div>
			<div className="footer__section">
				<h5>NYHETER</h5>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a href="#">Nu söker vi miljösamordnare!</a>
				</div>
			</div>
			<div className="footer__section">
				<h5>SITEMAP</h5>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Verksamhet</a>
				</div>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Projekt</a>
				</div>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Jobba hos oss</a>
				</div>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Kontakt</a>
				</div>
			</div>
			<div className="footer__section">
				<h5>AFFÄRSOMRÅDEN</h5>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Projektledning</a>
				</div>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Projekteringsledning</a>
				</div>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Installationsledning</a>
				</div>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Byggekonomi</a>
				</div>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Miljö</a>
				</div>
				<div className="footer__link">
					<MdKeyboardArrowRight color="white" />
					<a>Fastighetskonsult</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
