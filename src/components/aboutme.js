import React from 'react';
import './aboutme.css';

const About = () => {
	return (
		<div className="about-me">
			<p className="about-title">Hur jag blev en programmerare:</p>

			<p className="about-text">Intresse för datorer har alltid funnits hos mig</p>

			<p className="about-text">
				Min karriär som utvecklare startade 2017 då jag genomförde två distanskurser, Programmering Grund- och
				Fortsättningskurs i Java. Året därpå antog jag en tvåårig yh-utbildning som Javautvecklare på
				IT-Högskolan i Liljeholmen.
			</p>
			<p className="about-text">
				Vid sidan utav studierna ägnar jag mig åt JavaScript och React/React Native, där jag utvecklar både
				hemsidor och mobilaplikationer.
			</p>
			<p className="about-text">
				I mitt senaste projekt har jag konverterat en webbaserad parkeringstjänst (likt easypark) till en
				mobilverision (mobilapplikation) i React Native. Webbtjänsten, som drivs utav en egenföretagare, har
				aktiva kunder och är inriktad till företag/föreningar.
			</p>

			<p className="about-title" style={{ marginTop: 32 }}>
				Annat kort om mig:
			</p>

			<p className="about-text">
				Jag är 35år och tvåbarnsfar som bor tillsammans med min fru i Vendelsö, ca 2mil söder om Stockholm. Jag
				skulle beskriva mig själv som glad, driven och envis. Grottar ofta in mig i sådant som jag finner
				intressant. Exempelt på sådant kan vara allt ifrån rymden till börsen och nationalekonomi.
			</p>

			<p className="about-text">
				När tid ges ser jag gärna en fotbollsmatch eller laddar mitt senaste lir i något strategispel som tex
				Civ. Det slutar ofta med att jag öppnar upp ett av mina projekt som jag har nya tankar med.
			</p>

			<p className="about-text">
				Jag har nu programmerat i ca fyra år, mestadels i JavaScript och i dess bibliotek React/React Native,
				och jag ser nu mycket fram emot att hamna hos ett skönt gäng där jag vet att jag kommer att kunna bidra.
			</p>

			<p className="about-text">Tveka inte på att höra av dig om du har frågor eller funderingar.</p>

			<p className="greeting-text">Med vänliga hälsningar, Ludvig Björn</p>

			<div className="skills-container">
				<p className="skills-text">React | React Native | JavaScript | HTML | CSS | Java</p>
			</div>
		</div>
	);
};

export default About;
