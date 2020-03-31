import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

const Projects = () => {
	const [ activeTab, setActiveTab ] = useState(0);

	const toggleCategories = () => {
		switch (activeTab) {
			case 0:
				return (
					<div>
						<h1>This is Java</h1>
					</div>
				);
			case 1:
				return (
					<div>
						<h1>This is Spring</h1>
					</div>
				);
			case 2:
				return (
					<div>
						<h1>This is JavaScript</h1>
					</div>
				);
			case 3:
				return (
					<div>
						<h1>This is React</h1>
					</div>
				);
			default:
				return 'No Tab';
		}
	};

	return (
		<div className="category-tabs">
			<Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
				<Tab>Java</Tab>
				<Tab>Spring</Tab>
				<Tab>JavaScript</Tab>
				<Tab>React</Tab>
			</Tabs>
			<section className="projects-grid">
				<Grid className="projects-grid">
					<Cell col={12}>
						<div className="content">{toggleCategories()}</div>
					</Cell>
				</Grid>
			</section>
		</div>
	);
};

export default Projects;
