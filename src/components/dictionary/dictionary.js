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
				description="DOM är ett gränssnitt som i minnet konverterar ett XML eller HTMLdokument i en såkallad
			trädstruktur, vilket är en hierarkiskt datastruktur där vi först har ett rotelement som
			sedan leder ut i andra grenelement. Vi kan tack vare DOM enklare komma åt och uppdatera
			elementen i dokumentet genom denna struktur, via dess funktioner."
				note="En enkelt förklaring vad Document Object Model står för: Document = filen vi arbetar med, Object
			= elementen i filen, Model = struktur"
			/>
			<Dictionaryitem
				name="Representational State Transfer"
				shortening="REST"
				type="API"
				description="Rest är ett gränssnitt för hur man överför data mellan klient (användare) och server (databas). Denna överföring går att integrera med ett antal metoder."
				note="De mest använda metoderna:

				GET – hämta data,
				POST – skapa data,
				PUT – uppdatera data,
				DELETE – ta bort data"
			/>
		</div>
	);
};

export default Dictionary;
