import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

const Resume = () => {
	return (
		<div>
			<Grid>
				<Cell col={4}>
					{/* <div style={{ textAlign: 'center' }}>
						<img src={myAvatar} alt="avatar" style={{ height: '400px' }} />
					</div> */}

					<h3 style={{ fontWeight: 'bold' }}>Ludvig Björn</h3>
					<h4 style={{ color: 'grey' }}>Kort om mig:</h4>
					<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
					<p>
						Hej! Jag är Ludvig, 35 år, som bor tillsamans med fru och två barn i Vendelsö, ca 2 mil söder om
						Stockholm.
					</p>
					<p>Studerar till Javautvecklare på IT-Högskolan i Liljeholmen.</p>
					<p>
						Programmerar vid sidan utav studierna i JavaScript/React/Ract Native där hemsidor och appar
						utvecklas.
					</p>
					<p>Övriga intressen är fotboll och eventuellt något strategispel.</p>
					<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
					<h5>Adress</h5>
					<p>Klöverhagen 25, Vendelsö</p>
					<h5>Mobil</h5>
					<p>0704608611</p>
					<h5>Email</h5>
					<p>bslbjorn@gmail.com</p>
					{/* <h5>Web</h5>
					<p>https://www.google.com</p> */}
					<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
				</Cell>
				<Cell className="resume-right-col" col={8}>
					<h2>Utbildning</h2>
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
						schoolDescription={'Ekonomi'}
					/>
					<hr style={{ borderTop: '3px solid #e22947' }} />
					<h2>Arbetslivserfarenhet</h2>
					<Experience
						startYear={2010}
						endYear={'Nuvarande'}
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
					<hr style={{ borderTop: '3px solid #e22947' }} />
					<Skills skill="Java   " progress={40} />
					<Skills skill="Spring   " progress={5} />
					<Skills skill="JavaScript" progress={40} />
					<Skills skill="React         " progress={65} />
				</Cell>
			</Grid>
		</div>
	);
};

export default Resume;
