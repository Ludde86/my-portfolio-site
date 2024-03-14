import React from 'react';
import Operation from '../operation/Operation';
import './operations.css';

const Operations = () => {
	return (
		<div className="operations" id="operations">
			<Operation
				title="DITT HUS, VÅRT ANSVAR"
				subtitle="PROJEKTLEDNING"
				description="Att leda ett stort byggprojekt är som att anordna ett olympiskt spel: hisnande komplicerat och med krav på samordning av många olika agendor. Det kräver tålamod, erfarenhet – och magkänsla."
				color="#cf09ac"
			/>
			<Operation
				title="FRÅN ORD TILL HANDLING"
				subtitle="PROJEKTERINGSLEDNING"
				description="En projekteringsledare koordinerar detaljplaneringen av ett byggprojekt. I praktiken: tar fram rätt handlingar i rätt tid, så att arbetet flyter på."
				color="#91d04d"
			/>
			<Operation
				title="HUS HAR SJÄL"
				subtitle="INSTALLATIONSLEDNING"
				description="Installationer utgör en allt större andel av den totala byggkostnaden och är helt avgörande för byggnadens funktion. Betydelsen av effektiv installationsledning kan inte nog understrykas."
				color="#0673f9"
			/>
			<Operation
				title="RÄKNA MED OSS"
				subtitle="BYGGEKONOMI"
				description="Vad kommer det att kosta? Vad borde det kosta? Centrala frågor för byggherrar och beställare. Hedström & Taube Byggekonomi har svaren."
				color="#5d13b0"
			/>
			<Operation
				title="FÖR JORDEN, I HUSET"
				subtitle="MILJÖ"
				description="Hållbarhetsperspektivet är idag ständigt närvarande för samhällsutvecklare inom byggindustrin. Tre av de viktigaste byggstenarna är: inomhusmiljö, klimatpåverkan och ekonomi. För att arbeta praktiskt med hållbarhetsfrågor använder man med fördel ett miljöcertifieringsverktyg."
				color="#2f9e11"
			/>
			<Operation
				title="GENOMFÖR DIN IDÉ"
				subtitle="FASTIGHETSKONSULT"
				description="I vissa uppdrag tar Hedström & Taube rollen som fastighetskonsult, där ansvaret är ännu mer övergripande och där kompetens från ett flertal av de olika verksamhetsområdena samlas och koordineras."
				color="#ea7f04"
			/>
		</div>
	);
};

export default Operations;
