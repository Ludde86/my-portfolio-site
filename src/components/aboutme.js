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
					Jag är 36år och tvåbarnsfar som bor tillsammans med min fru i Vendelsö, ca 2mil söder om Stockholm.
					Jag skulle beskriva mig själv som glad, driven och envis. Grottar ofta in mig i sådant som jag
					finner intressant.
				</p>

				<p className="about-text">
					När tid ges ser jag gärna en fotbollsmatch eller laddar mitt senaste game i något strategispel. Det
					slutar ofta med att jag öppnar upp ett av mina projekt då jag har nya tankar och idéer att arbeta
					med.
				</p>

				<p className="about-text">
					Jag har nu programmerat i ca fyra år, mestadels i JavaScript och i dess bibliotek React/React
					Native, och jag ser mycket fram emot att hamna hos ett härligt och drivet gäng med humor, där jag
					vet att jag kommer att kunna bidra och utvecklas.
				</p>

				<p className="about-text">
					Jag driver även butiker inom e-handel som jag har sysslat med i ungefär två års tid. Jag kan från
					grunden bygga upp en nätbutik, skapa annonser, till att sälja produkter.
				</p>

				<p className="about-title">Vad jag gör just nu:</p>

				<p className="about-text">
					Utvecklar en app åt Parkera.nu som är en webbaserad parkeringstjänst. Här har jag tillsammans med
					produktägaren hittat lösningar för att användarna enklare ska kunna bevaka och hantera sina
					uppgifter och parkeringstillstånd. Appen är i sitt slutskede och ska snart publiceras till tjänstens
					användare.
				</p>

				<p className="about-text">
					Testar produkter, bygger upp hemsidor/butiker, hanterar lager, ordrar och kundtjänst inom e-handel.
					Jag skapar annonser och hanterar annonskontot via meta/facebook där jag följer statistik för att
					testa, optimera och utveckla annonserna.
				</p>

				<p className="about-text">
					Jag utvecklar även hemsidor, dels från grunden, men även genom att utveckla redan befintliga
					hemsidor till mer "moderna".
				</p>

				<p className="about-title">Utvecklingsmiljö:</p>

				<p className="about-text">
					Jag utvecklar i JavaScript-biblioteken React och React-native, designar i ren CSS.
				</p>

				<p className="about-text">
					Inom e-handel använder jag plattformen shopify och Business manager för meta/facebook.
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
