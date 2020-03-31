import React, { useState } from 'react';
import { Tabs, Tab } from 'react-mdl';

const Projects = () => {
	const [ activeTab, setActiveTab ] = useState(0);
	return (
		<div className="category-tabs">
			<Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
				<Tab>Java</Tab>
				<Tab>Spring</Tab>
				<Tab>JavaScript</Tab>
				<Tab>React</Tab>
			</Tabs>
		</div>
	);
};

export default Projects;
