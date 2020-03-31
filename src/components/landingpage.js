import React from 'react';
import { Grid, Cell } from 'react-mdl';
import myAvatar2 from '../img/myAvatar2.png';

const Landing = () => {
	return (
		<div style={{ width: '100%', margin: 'auto' }}>
			<Grid className="landing-grid">
				<Cell col={12}>
					<img src={myAvatar2} alt="profile" className="avatar-img" />
					<div className="banner-text">
						<h1>Full Stack Web Developer</h1>

						<hr />

						<p>Java | JavaScript | React | HTML/CSS</p>
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default Landing;
