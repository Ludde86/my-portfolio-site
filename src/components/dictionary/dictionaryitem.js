import React from 'react';
import './dictionaryitem.css';

const Dictionaryitem = ({ name, shortening, type, description, note }) => {
	return (
		<div className="dictionary-container">
			<div className="dictionary-item">
				<div className="title">
					<text className="label">Vad: </text>
					<text className="text">{name}</text>
				</div>
				<div className="title">
					<text className="label">Förkortning: </text>
					<text className="text">{shortening}</text>
				</div>
				<div className="title">
					<text className="label">Typ: </text>
					<text className="text">{type}</text>
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
				<hr style={{ borderTop: '4px solid #333 ' }} />
			</div>
		</div>
	);
};

export default Dictionaryitem;
