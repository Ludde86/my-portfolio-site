import React from 'react';
import './dictionary.css';

const Dictionary = () => {
	return (
		<div className="dictionary-container">
			<div className="dictionary-item">
				<div className="title">
					<text className="label">Vad: </text>
					<text className="text">Document Object Model</text>
				</div>
				<div className="title">
					<text className="label">Förkortning: </text>
					<text className="text">DOM</text>
				</div>
				<div className="title">
					<text className="label">Typ: </text>
					<text className="text">API</text>
				</div>
				<br />
				<div className="title">
					<text className="label">Beskrivning: </text>
					<text className="text">
						DOM är en API som i minnet konverterar ett XML eller HTMLdokument till en såkallad
						"trädstruktur", vilket är en hierarkiskt datastruktur där vi först har ett "rotelement" som
						sedan leder ut i andra "grenelement". Vi kan tack vare DOM enklare komma åt och uppdatera
						elementen i dokumentet genom denna struktur, via dess funktioner.
					</text>
				</div>
				<br />
				<div className="title">
					<text className="label">Notering: </text>
					<text className="text">
						En enkelt förklaring vad Document Object Model står för: Document = filen vi arbetar med, Object
						= elementen i filen, Model = struktur
					</text>
				</div>
				<hr style={{ borderTop: '4px solid #333 ' }} />
			</div>
		</div>
	);
};

export default Dictionary;
