import React from 'react';
import './dictionary.css';
import Dictionaryitem from './dictionaryitem';

const Dictionary = () => {
	return (
		<div className="dictionary-container">
			<Dictionaryitem
				name="Document Object Model"
				shortening="DOM"
				type="API"
				description="DOM är en API som i minnet konverterar ett XML eller HTMLdokument till en såkallad
			trädstruktur, vilket är en hierarkiskt datastruktur där vi först har ett rotelement som
			sedan leder ut i andra grenelement. Vi kan tack vare DOM enklare komma åt och uppdatera
			elementen i dokumentet genom denna struktur, via dess funktioner."
				note="En enkelt förklaring vad Document Object Model står för: Document = filen vi arbetar med, Object
			= elementen i filen, Model = struktur"
			/>
		</div>
	);
};

export default Dictionary;
