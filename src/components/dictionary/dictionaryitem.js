import React from 'react';
import './dictionaryitem.css';

const Dictionaryitem = ({ name, nameSwe, shortening, type, year, description, note, docs }) => {
	return (
		<div className="dictionary-item">
			<div className="title">
				<text className="label">Vad: </text>
				<text className="text">{name}</text>
			</div>
			<div className="title">
				<text className="label">Svenska: </text>
				<text className="text">{nameSwe}</text>
			</div>
			<div className="title">
				<text className="label">Förkortning: </text>
				<text className="text">{shortening}</text>
			</div>
			<div className="title">
				<text className="label">Typ: </text>
				<text className="text">{type}</text>
			</div>
			<div className="title">
				<text className="label">Publicering: </text>
				<text className="text">{year}</text>
			</div>
			<div className="title">
				<text className="label">Dokumentation: </text>
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
					rel="noopener noreferrer"
					target="_blank"
					className="text"
				>
					{docs}
				</a>
			</div>
			<br />
			<div className="title">
				<text className="label">Beskrivning: </text>
				<text className="text">{description}</text>
			</div>
			<br />
			<div className="title">
				<text className="label">Notering: </text>
				<text className="text">{note}</text>
			</div>

			<hr style={{ borderTop: '4px solid #333', marginTop: 24 }} />
		</div>
	);
};

export default Dictionaryitem;
