import React from 'react';
import { Grid, Cell } from 'react-mdl';
import myAvatar from '../img/myAvatar4.png';
import Education from './education';

const Resume = () => {
	return (
		<div>
			<Grid>
				<Cell col={4}>
					<div style={{ textAlign: 'center' }}>
						<img src={myAvatar} alt="avatar" style={{ height: '200px' }} />
					</div>
					<h2 style={{ paddingTop: '2em' }}>Ludvig Björn</h2>
					<h4 style={{ color: 'grey' }}>Bla bla</h4>
					<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
					<p>blablablablablablabla</p>
					<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
					<h5>Address</h5>
					<p>blablablabla</p>
					<h5>Phone</h5>
					<p>35345345345</p>
					<h5>Email</h5>
					<p>sdfdsfds@mail.com</p>
					<h5>Web</h5>
					<p>website.com</p>
					<hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
				</Cell>
				<Cell className="resume-right-col" col={8}>
					<h2>Education</h2>
					<Education
						startYear={2018}
						endYear={2020}
						schoolName={'IT-Högskolan Stockholm'}
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
					<h2>Experience</h2>
				</Cell>
			</Grid>
		</div>
	);
};

export default Resume;
