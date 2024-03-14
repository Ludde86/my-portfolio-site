import React from 'react';
import './htproject.css';
import Footer from './footer/Footer';
import Main from './main/Main';
import Nav from './nav/Nav';

const Htproject = () => {
	return (
		<div className="app">
			<Nav />
			<Main />
			<Footer />
		</div>
	);
};

export default Htproject;
