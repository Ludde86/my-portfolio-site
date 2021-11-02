import React from 'react';
import './dictionary.css';
import Dictionaryitem from './dictionaryitem';

const Dictionary = () => {
	return (
		<div className="dictionary-container">
			<Dictionaryitem
				name="Interface"
				nameSwe="Gränssnitt"
				shortening="-"
				type="-"
				description="Ett gränssnitt används mellan olika applikationer och andra objekt genom att interagera och utbyta information mellan dessa. 
					Syftet med gränssnitt är att separera dess information från själva programkoden så att dess information istället nås genom anrop via det specifika gränssnittet."
				note="-"
				year="-"
			/>

			<Dictionaryitem
				name="Application Programming Interface"
				nameSwe="Applikationsprogrammeringsgränssnitt"
				shortening="API"
				type="Mjukvarugränssnitt"
				description="Ett API är utformat så att en applikation ska kunna kommunicera med andra gränssnitt. 
					Genom anrop kan man sedan använda t.ex alla dess funktioner, utan att behöva skriva dessa funktioner själv."
				note="API:er kan ses som budbärare som levererar den information vi vill åt, om den finns tillgänglig."
				year="-"
			/>

			<Dictionaryitem
				name="Document Object Model"
				shortening="DOM"
				type="API"
				description="DOM är ett gränssnitt som i minnet konverterar ett XML eller HTMLdokument i en såkallad
					trädstruktur, vilket är en hierarkiskt datastruktur där vi först har ett rotelement som
					sedan leder ut i andra grenelement. Vi kan tack vare DOM enklare komma åt och uppdatera dessa
					element i dokumentet genom denna struktur, via dess funktioner."
				note="En enkelt förklaring vad Document Object Model står för: Document = filen vi arbetar med, Object
				= elementen i filen, Model = struktur"
				year="-"
			/>

			<Dictionaryitem
				name="Microservices"
				nameSwe="Mikrotjänster"
				shortening="-"
				type="-"
				description="Istället för en stor applikation som hanterar allting kan man separera applikationer i mindre delar som hanterar olika tjänster. 
					Dessa delar kallas för mikrotjänster och är oberoende av varandra men har alltid en kommunikation med själva applikationen. 
					En fördel med mikrotjänster är att en applikation blir mycket enklare att underhålla och skulle ett eventuellt fel inträffa i en av mikrotjänsterna kraschar endast den delen, 
					och inte hela applikationen.
					Exempel på mikrotjänster kan vara att hantera en säker inloggning medan en annan kan vara att hämta information av en användare ifrån en databas."
				note="-"
				year="-"
			/>

			<Dictionaryitem
				name="Node.js"
				shortening="Node"
				type="körning"
				description="Node.js utför JavaScript-kod"
				note="Node.js använder JavaScript som pragrammeringsspråk"
				year="2009"
			/>

			<Dictionaryitem
				name="Programmeringsspråk"
				shortening="-"
				type="-"
				description="Ett programmeringsspråk är ett språk som ger instruktioner till vad en dator ska göra"
				note="Programmeringsspråk kallas även för programspråk"
				year="-"
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
				year="-"
			/>
		</div>
	);
};

export default Dictionary;
