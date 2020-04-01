import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

const Skills = (props) => {
	return (
		<Grid>
			<Cell col={12}>
				<div style={{ display: 'flex' }}>
					<div style={{ minWidth: '20%' }}>{props.skill}</div>

					<ProgressBar style={{ margin: 'auto', width: '75%' }} progress={props.progress} />
				</div>
			</Cell>
		</Grid>
	);
};

export default Skills;
