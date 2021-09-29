import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import './skills.css';

const Skills = (props) => {
	return (
		<Grid>
			<Cell col={12}>
				<div style={{ display: 'flex', width: '100%' }}>
					<text className="skill-text">{props.skill}</text>

					<ProgressBar style={{ margin: 'auto', width: '100%' }} progress={props.progress} />
				</div>
			</Cell>
		</Grid>
	);
};

export default Skills;
