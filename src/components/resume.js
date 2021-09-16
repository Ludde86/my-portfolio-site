import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
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
							Klöverhagen 25 Vendelsö
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
					startYear={2010}
					endYear={2020}
					jobName={'ICA Maxi Haninge'}
					jobPosition={'Butiksbiträde'}
					jobDescription={
						'Största fokus på ICA Maxi Haninge är att ge kunderna den bästa	servicen. 2017 blev jag	nominerad till årets medarbetare, där jag hamnade på en	prestigefull andra plats, av ca. 250 anställda.	Min	tid	spenderades	på mejeriavdelningen, där det är ett högt tryck	med kunder med många	frågor.	Högt tempo mixat med krav på god service har varit viktigt, vilket har gjort mig väldigt stresstålig och lyhörd.'
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
				<Skills skill="Java" progress={40} />
				<Skills skill="JavaScript" progress={40} />
				<Skills skill="React" progress={65} />
				<Skills skill="React Native" progress={65} />
				<Skills skill="CSS" progress={70} />
			</div>
		</div>
	);
};

export default Resume;
