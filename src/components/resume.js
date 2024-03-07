import React from 'react';
import Education from './education';
import Experience from './experience';
import myAvatar from '../img/avatar-small-resume.png';
import './resume.css';

const Resume = () => {
	return (
		<div className="resume-container">
			<div className="about-container">
				<div className="avatar-container">
					<img src={myAvatar} alt="avatar" className="avatar" />
					{/**
					<h3 style={{ fontWeight: 'bold' }}>Ludvig Björn</h3>
				 */}
				</div>

				{/*
				<h4 style={{ color: 'grey' }}>Kort om mig:</h4>
				<hr style={{ borderTop: '4px solid #833fb2', width: '90%', paddingTop: '32px' }} />
			*/}

				<div className="info-container">
					<div className="info-content">
						<text className="info-label">Namn:</text>
						<text className="info-text">Ludvig Björn</text>
					</div>
					<div className="info-content">
						<text className="info-label">Adress:</text>
						<text className="info-text" style={{ textAlign: 'end' }}>
							Klöverhagen 25, Vendelsö
						</text>
					</div>
					<div className="info-content">
						<text className="info-label">Familj:</text>
						<text className="info-text">Gift, två barn</text>
					</div>
					<div className="info-content">
						<text className="info-label">Mobil:</text>
						<text className="info-text">0704608611</text>
					</div>
					<div className="info-content">
						<text className="info-label">Email:</text>
						<text className="info-text">bslbjorn@gmail.com</text>
					</div>
					<div className="info-content">
						<text className="info-label">Hemsida:</text>
						<text className="info-text">ludvigbjorn.com</text>
					</div>
				</div>
			</div>

			<div className="experience-container">
				<h4 className="experience-title">Utbildning</h4>
				<Education
					startYear={2018}
					endYear={2020}
					schoolName={'IT-Högskolan Liljeholmen'}
					schoolDescription={'Javautvecklare'}
				/>
				<Education
					startYear={2017}
					endYear={2018}
					schoolName={'ITHS-Distans Göteborg'}
					schoolDescription={'Programmering Grund- & Fortsättningskurs Java'}
				/>
				<Education
					startYear={2002}
					endYear={2005}
					schoolName={'Fredrika Bremergymnasiet'}
					schoolDescription={'Naturvetenskap/Ekonomi'}
				/>
				{/*
					<hr style={{ borderTop: '4px solid #e22947' }} />
				*/}
				<hr style={{ borderTop: '4px solid #333 ' }} />

				<h4 className="experience-title">Arbetslivserfarenhet</h4>
				<Experience
					startYear={2022}
					endYear={'Pågående'}
					jobName={'Olika butiker'}
					jobPosition={'E-handel'}
					jobDescription={
						'Sedan slutet av 2022 sysslar jag även med e-handel där jag testar produkter, bygger upp hemsidor/butiker, hanterar lager, ordrar och kundtjänst. Jag skapar annonser och hanterar annonskontot via meta/facebook där jag följer statistik för att testa, optimera och utveckla annonserna. Den senaste butiken har sålt över 1000 produkter och omsatt över 250,000kr sedan september 2023, endast här i Sverige.'
					}
				/>
				<Experience
					startYear={2021}
					endYear={'Pågående'}
					jobName={'Parkera.nu'}
					jobPosition={'Applikationsutvecklare'}
					jobDescription={
						'Parkera.nu är en webbaserad parkeringstjänst riktad mot små och mellanstora företag där jag utvecklar mobilapplikationer till företagets olika tjänster eftersom dessa endast var webbaserade från början. Applikationerna är utvecklade i ReactJS/React-native. Företaget är ett enmansbolag vilket innebär att jag har god kontakt med produktägaren. Jag gjorde även mitt examensarbete på företaget och hjälper nu till med att vidareutveckla applikationerna.'
					}
				/>
				<Experience
					startYear={2019}
					endYear={2019}
					jobName={'Sweet Systems'}
					jobPosition={'Praktik/LIA'}
					jobDescription={
						'Tillbringade två månader i detta företag som utvecklar och digitaliserar automatiserade kundprocesser. Jag ingick i deras grupp som produktutvecklare och arbetade utifrån deras UX designer för att forma tjänstens användargränsnitt. Arbetade även en del med deras testare för att åtgärda eventuella buggar. Fick även delta i företagets egna utbildningar och dagliga verksamhet.'
					}
				/>
				<Experience
					startYear={2018}
					endYear={2018}
					jobName={'Leader Island'}
					jobPosition={'Praktik/LIA'}
					jobDescription={
						'Leader Island är ett socialt nätverk som driver och utvecklar en app, skrivet i JavaScript och dess bibliotek ReactJs, där syftet är att engagera medarbetare i att ta del av information och aktivt bidra till ett positivt företagsklimat. Jag var här under en tvåmånadersperiod och fick ta del av hur företaget arbetade både internt och mot kund. Mitt primära arbete var att uppdatera gammal kod till nya modernare komponenter och att utveckla användargränsnittet i framförallt felmeddelanden och dylikt. Min tid här var otroligt lärorikt då det var första gången jag fick arbeta med ReactJS i ett riktigt projekt.'
					}
				/>
				<Experience
					startYear={2010}
					endYear={2020}
					jobName={'ICA Maxi Haninge'}
					jobPosition={'Butiksbiträde'}
					jobDescription={
						'Största fokus på ICA Maxi Haninge är att ge kunderna den bästa	servicen. 2017 blev jag	nominerad till årets medarbetare, där jag hamnade på en	prestigefull andra plats, av ca. 250 anställda.	Min	tid	spenderades	på mejeriavdelningen, där det är ett högt tryck	med kunder med många frågor. Högt tempo mixat med krav på god service har varit viktigt, vilket har gjort mig väldigt stresstålig och lyhörd.'
					}
				/>
				<Experience
					startYear={2006}
					endYear={2008}
					jobName={'ICA Supermarket Västerhaninge'}
					jobPosition={'Butiksbiträde'}
					jobDescription={
						'Året efter	studenten tog jag en grundkurs i Sociologi,	och	samtidigt började att arbeta kvällar i kassan på ICA där jag bland annat lärde mig att hantera kunder och att alltid ge	en bra service.	Jag	var	en mycket uppskattad kollega.'
					}
				/>
				<hr style={{ borderTop: '4px solid #333 ' }} />
				<h4 className="experience-title">Kompetens</h4>
				<div className="skills-resume-container">
					<text className="skills-text">Java</text>
					<text className="skills-text">JavaScript</text>
					<text className="skills-text">React</text>
					<text className="skills-text">React Native</text>
					<text className="skills-text">React Context</text>
					<text className="skills-text">Redux</text>
					<text className="skills-text">HTML</text>
					<text className="skills-text">CSS</text>
					<text className="skills-text">Flexbox</text>
					<text className="skills-text">MySQL</text>
					<text className="skills-text">Firebase</text>
					<text className="skills-text">MongoDB</text>
					<text className="skills-text">REST</text>
					<text className="skills-text">Shopify</text>
					<text className="skills-text">Business manager (meta/facebook)</text>
				</div>
				{/*
					<Skills skill="Java" progress={40} />
					<Skills skill="JavaScript" progress={40} />
					<Skills skill="React" progress={65} />
					<Skills skill="React Native" progress={65} />
					<Skills skill="CSS" progress={70} />
				*/}
			</div>
		</div>
	);
};

export default Resume;
