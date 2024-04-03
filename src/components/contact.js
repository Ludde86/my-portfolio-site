import React from 'react';
import './contact.css';
import myAvatar from '../img/avatar-contact-small.png';

const Contact = () => {
	return (
		<div className="contact-info">
			<div className="img-container">
				{/*
			<img src={myAvatar} alt="profile" className="contact-avatar" />
		*/}
				{/*
		<div className="contact-avatar"></div>
	*/}
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
						style={{ textDecoration: 'none' }}
					>
						<i className="fa fa-linkedin-square" aria-hidden="true" style={{ color: '#333' }} />
						<text className="info-text">ludvigbjorn</text>
					</a>
				</div>
				<div className="info">
					<a
						href="https://www.facebook.com/ludvig.bjorn"
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: 'none' }}
					>
						<i className="fa fa-facebook-square" aria-hidden="true" style={{ color: '#333' }} />
						<text className="info-text">Ludvig Björn via Messenger</text>
					</a>
				</div>
				<div className="info">
					<a
						href="https://github.com/Ludde86"
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: 'none' }}
					>
						<i className="fa fa-github-square" aria-hidden="true" style={{ color: '#333' }} />
						<text className="info-text">Ludde86</text>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
