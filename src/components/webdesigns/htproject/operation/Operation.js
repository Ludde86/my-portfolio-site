import React from 'react';
import './operation.css';

const Operation = ({ title, subtitle, description, color }) => {
	return (
		<div className="operation" style={{ background: color }}>
			<h2>{title}</h2>
			<div className="border" />
			<h3>{subtitle}</h3>
			<p>{description}</p>
		</div>
	);
};

export default Operation;
