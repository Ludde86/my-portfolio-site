import React from 'react';
import './experience.css';

const Experience = (props) => {
	return (
		<div className="experience-content">
			<div className="experience-item">
				<text className="experience-year">
					{props.startYear} - {props.endYear}
				</text>
				<h4 className="job-title">{props.jobName}</h4>
			</div>
			<div>
				<h5>{props.jobPosition}</h5>
				<text className="experience-description">{props.jobDescription}</text>
			</div>
		</div>
	);
};

export default Experience;
