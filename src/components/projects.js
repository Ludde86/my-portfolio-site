import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const Projects = () => {
	const [ activeTab, setActiveTab ] = useState(0);

	const toggleCategories = () => {
		switch (activeTab) {
			case 0:
				return (
					<div className="projects-grid">
						<Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
							<CardTitle
								style={{
									color: '#fff',
									height: '176px',
									background: 'url("/react-hook.png") center / cover'
								}}
							>
								ToDo web application
							</CardTitle>
							<CardText>https://klovisattgora.herokuapp.com/login</CardText>
							<CardText>https://klovisattgora.herokuapp.com/login</CardText>
							<CardActions border>
								<Button colored>Github</Button>
							</CardActions>
							<CardMenu style={{ color: '#fff' }}>
								<IconButton name="share" />
							</CardMenu>
						</Card>

						<Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
							<CardTitle
								style={{
									color: '#fff',
									height: '176px',
									background: 'url("/react-hook.png") center / cover'
								}}
							>
								React Project #2
							</CardTitle>
							<CardText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque
								lacus eleifend lacinia...
							</CardText>
							<CardActions border>
								<Button colored>Github</Button>
							</CardActions>
							<CardMenu style={{ color: '#fff' }}>
								<IconButton name="share" />
							</CardMenu>
						</Card>

						<Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
							<CardTitle
								style={{
									color: '#fff',
									height: '176px',
									background: 'url("/react-hook.png") center / cover'
								}}
							>
								React Project #3
							</CardTitle>
							<CardText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque
								lacus eleifend lacinia...
							</CardText>
							<CardActions border>
								<Button colored>Github</Button>
							</CardActions>
							<CardMenu style={{ color: '#fff' }}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</div>
				);
			case 1:
				return (
					<div>
						<h1>This is React Native</h1>
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
						<h1>This is Java</h1>
					</div>
				);
			case 4:
				return (
					<div>
						<h1>This is Spring</h1>
					</div>
				);
			default:
				return 'No Tab';
		}
	};

	return (
		<div className="category-tabs">
			<Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
				<Tab>React</Tab>
				<Tab>React Native</Tab>
				<Tab>JavaScript</Tab>
				<Tab>Java</Tab>
				<Tab>Spring</Tab>
			</Tabs>

			<Grid>
				<Cell col={12}>
					<div className="content">{toggleCategories()}</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default Projects;
