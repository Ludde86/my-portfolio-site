import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './education.css';

const Education = (props) => {
	return (
		<div className="education-content">
			<div className="education-item">
				<text className="education-year">
					{props.startYear} - {props.endYear}
				</text>
				<text className="education-title">{props.schoolName}</text>
			</div>

			<div className="education-description">
				<text>{props.schoolDescription}</text>
			</div>
		</div>
	);
};

export default Education;
