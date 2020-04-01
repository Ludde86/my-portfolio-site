import React from 'react';
import { Grid, Cell } from 'react-mdl';
import myAvatar2 from '../img/myAvatar3.png';

const Landing = () => {
	return (
		<div style={{ width: '100%', margin: 'auto' }}>
			<Grid className="landing-grid">
				<Cell col={12}>
					<img src={myAvatar2} alt="profile" className="avatar-img" />
					<div className="banner-text">
						<h1>Student: Javautvecklare</h1>

						<hr />

						<p>Java | Spring | JavaScript | React | HTML/CSS</p>

						{/* LinkedIn */}
						<div className="social-links">
							<a
								href="https://www.linkedin.com/in/ludvig-bj%C3%B6rn-4b582417b/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>

							{/* Github */}
							<a href="https://github.com/Ludde86" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-github-square" aria-hidden="true" />
							</a>
						</div>
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default Landing;
