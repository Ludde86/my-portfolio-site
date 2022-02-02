import React from 'react';
import './dictionary.css';
import Dictionaryitem from './dictionaryitem';

const Dictionary = () => {
	return (
		<div className="dictionary-container">
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
				name="Argument"
				nameSwe="-"
				shortening="-"
				type="-"
				description="Data som en funktion tar emot."
				note="-"
				year="-"
			/>

			<Dictionaryitem
				name="Compile Time"
				nameSwe="Kompilering"
				shortening="-"
				type="Execution"
				description="Körning som översätter källkoden till maskinkod där kompileraren styr hur programmet ska köras, kontrollerar syntaxen och så att typningen av koden stämmer."
				note="-"
				year="-"
			/>

			<Dictionaryitem
				name="Declare"
				nameSwe="Deklarera"
				shortening="-"
				type="-"
				description="För att använda en variabel måste man först berätta att varibeln finns och vad den ska heta (namnen på saker i program kallas även identifierare). 
				Det kallas för att man deklarerar den. "
				note="-"
				year="-"
			/>

			<Dictionaryitem
				name="Document Object Model"
				nameSwe="-"
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
				name="Initiate"
				nameSwe="Initiera"
				shortening=""
				type="-"
				description="Man kan tilldela en variabel ett värde redan när man deklarerar den. Då kallas det att man initierar den.  "
				note="-"
				year="-"
			/>

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
				name="JavaScript"
				nameSwe="-"
				shortening="JS"
				type="Programmeringsspråk"
				description="JavaScript utvecklades från början för att göra webbläsarna mer dynamiska genom HTML-kod, stylesheet och eventdrivna funktioner som ger användaren en trevligare upplevelse på webbsidorna.
					2015 kom en stor uppdatering av JavaScript som ledde till ett mer klassbaserat/objektorienterad stöd"
				note="-"
				year="1995"
				docs="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
			/>

			<Dictionaryitem
				name="Function Anonymous"
				nameSwe="-"
				shortening="-"
				type="-"
				description="En namnlös funktion som kan användas som ett argument i en annan funktion för att köra den direkt utan att behöva deklarera den."
				note="-"
				year="-"
				docs=""
			/>

			<Dictionaryitem
				name="Function Expression"
				nameSwe="-"
				shortening="-"
				type="-"
				description="En funktion som har definerats i en variabel, dvs att variabeln har funktionens värde."
				note="Denna typ av funktion går ej att anropa innan den är definerad då den är odefinerad."
				year="-"
				docs=""
			/>

			<Dictionaryitem
				name="Function Statement/Declaration"
				nameSwe="-"
				shortening="-"
				type="-"
				description="En funktion vars syfte är att utföra en instruktion."
				note="Denna typ av funktion går att anropa innan den är deklarerad."
				year="-"
				docs=""
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
				nameSwe="-"
				shortening="Node"
				type="körning"
				description="Node.js utför JavaScript-kod"
				note="Node.js använder JavaScript som pragrammeringsspråk"
				year="2009"
			/>

			<Dictionaryitem
				name="Parameter"
				nameSwe="-"
				shortening="-"
				type="-"
				description="Data som skickas till en anropad funktion."
				note="-"
				year="-"
			/>

			<Dictionaryitem
				name="Programming Language"
				nameSwe="Programmeringsspråk"
				shortening="-"
				type="-"
				description="Ett programmeringsspråk är ett språk som ger instruktioner till vad en dator ska göra"
				note="Programmeringsspråk kallas även för programspråk"
				year="-"
			/>

			<Dictionaryitem
				name="Prototype-based"
				nameSwe="-"
				shortening="-"
				type="-"
				description="Ett skapat objekt användas/refereras genom en prototyp"
				note="-"
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

			<Dictionaryitem
				name="Runtime"
				nameSwe="Körtid"
				shortening="-"
				type="Execution"
				description="Exekvering som kör källkoden efter Kompileringen."
				note="-"
				year="-"
			/>

			<Dictionaryitem
				name="Static typed language"
				nameSwe="Statisk typningsspråk"
				shortening="-"
				type="Classification"
				description="I ett statisk typningsspråk kan man inte tilldela en variabel en ny typ efter att den är deklarerad. Om man försäker initiera ett nytt värde till en variabel med 
				en annan typ kommer ett felmeddelande att visas."
				note="Typningskontrollen sker här när programmer kompilerats, innan körtiden."
				year="-"
			/>

			<Dictionaryitem
				name="Dynamic typed language"
				nameSwe="Dynamisk typningsspråk"
				shortening="-"
				type="Classification"
				description=""
				note="Typningskontrollen sker här efter att programmet har kompilerats."
				year="-"
			/>
		</div>
	);
};

export default Dictionary;
