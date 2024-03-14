import React from 'react';
import './news.css';

const News = () => {
	return (
		<div className="news">
			<h3 className="news__title" id="news">
				Nu söker vi miljösamordnare!
			</h3>
			<p className="news__desc">
				Nu söker vi miljösamordnare! Vill du också vara en del av samhällsomställningen till ett mer hållbart
				byggande och känner att klimat- och hållbarhetsfrågor ligger dig varmt om hjärtat? Hedström och Taube
				Miljö är branschledande... <span className="news__link">Läs mer</span>
			</p>
		</div>
	);
};

export default News;
