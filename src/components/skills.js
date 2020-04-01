import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

const Skills = (props) => {
	return (
		<Grid>
			<Cell col={12}>
				<div style={{ display: 'flex' }}>
					<div className="skill">{props.skill}</div>
					<div className="progress">
						<ProgressBar style={{ margin: 'auto', width: '75%' }} progress={props.progress} />
					</div>
				</div>
			</Cell>
		</Grid>
	);
};

export default Skills;
