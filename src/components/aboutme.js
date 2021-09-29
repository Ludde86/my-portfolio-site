import React from 'react';
import './aboutme.css';

const About = () => {
	return (
		<div>
			<div className="about-me">
				<p className="about-title" style={{ marginTop: 32 }}>
					Om mig:
				</p>

				<p className="about-text">
					Jag är 35år och tvåbarnsfar som bor tillsammans med min fru i Vendelsö, ca 2mil söder om Stockholm.
					Jag skulle beskriva mig själv som glad, driven och envis. Grottar ofta in mig i sådant som jag
					finner intressant. Exempelt på sådant kan vara allt ifrån rymden till nationalekonomi.
				</p>

				<p className="about-text">
					När tid ges ser jag gärna en fotbollsmatch eller laddar mitt senaste game i något strategispel. Det
					slutar ofta med att jag öppnar upp ett av mina projekt då jag har nya tankar och idéer att arbeta
					med.
				</p>

				<p className="about-text">
					Jag har nu programmerat i ca fyra år, mestadels i JavaScript och i dess bibliotek React/React
					Native, och jag ser mycket fram emot att hamna hos ett skönt drivet gäng med humor, där jag vet att
					jag kommer att kunna bidra och utvecklas.
				</p>

				<p className="about-title">Hur jag blev programmerare:</p>

				<p className="about-text">
					Min karriär som utvecklare startade 2017 då jag genomförde två distanskurser, Programmering Grund-
					och Fortsättningskurs i Java. Året därpå antog jag en tvåårig yh-utbildning som Javautvecklare på
					IT-Högskolan i Liljeholmen.
				</p>
				<p className="about-text">
					Vid sidan utav studierna ägnade jag mig åt JavaScript och React/React Native, där jag utvecklade
					både hemsidor och mobilapplikationer.
				</p>
				<p className="about-text">
					I mitt senaste projekt har jag konverterat en webbaserad parkeringstjänst (likt easypark) till en
					mobilapplikation i React Native. Webbtjänsten, som drivs av en egenföretagare, har aktiva kunder och
					är inriktad till företag/föreningar.
				</p>

				<p className="about-text">Tveka inte på att höra av dig om du har frågor eller funderingar.</p>

				<p className="greeting-text">Med vänliga hälsningar, Ludvig Björn</p>
			</div>
			<div className="skills-container">
				<text className="skills-text">React | React Native | JavaScript | HTML | CSS | Java</text>
			</div>
		</div>
	);
};

export default About;
