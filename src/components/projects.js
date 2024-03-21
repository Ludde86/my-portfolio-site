import React, { useState } from 'react';
import './projects.css';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import Challenge1 from './challengesCSS/challenge1/Challenge1';
import Webdesign1 from "./webdesigns/webdesign1/webdesign1";
import Naprapatrehab from './webdesigns/naprapatrehab/Naprapatrehab';
import Htproject from './webdesigns/htproject/Htproject';
import NaprapatRehab2 from './webdesigns/naprapatrehab2/NaprapatRehab2';

const Projects = () => {
	const [activeTab, setActiveTab] = useState(0);

	const toggleCategories = () => {
		switch (activeTab) {
			case 0:
				return (
					<div className="projects-container">
						<NaprapatRehab2 />
					</div>
				);
			case 1:
				return (
					<div className="projects-container">
						<Naprapatrehab />
					</div>
				);
			case 2:
				return (

					<div className="projects-container">
						<Htproject />
					</div>

				);
			case 3:
				return (
					<div className="projects-container">
						<Card shadow={5} className="card-container">
							<CardTitle
								style={{
									color: '#fff',
									height: '126px',
									background: 'url("/createyourlist.png") center / cover',
									margin: 12,
									borderRadius: 12
								}}
							/>
							<CardText className="card-text">
								<h5>Create Your List - Mobilapp</h5>
								<p>Min första mobilapp som ligger ute för alla androidanvändare på google play.</p>
								<p>
									En todo app där man kan skapa oändligt med listor, och fylla dessa med
									information.
								</p>
								<p>Det går att anpassa dessa listor med vyer och färger som passar användaren.</p>
								<p>
									Enkelt att lägga till, ta bort och ändra listorna, samma sak med dess
									information.
								</p>
								<p>
									Plattformen som används på denna mobilapplikation för att lagra data är
									Firebase.
								</p>
								<h5>Sekretesspolicy för Create Your List: </h5>

								<p>Denna app behandlar ej några känsliga användaruppgifter eller data.</p>
								<p>
									Du skapar ett anonymt konto med endast ett användarnamn och lösenord. Helt utan
									personuppgifter, kontaktuppgifter och dylikt.
								</p>
							</CardText>
							<CardActions border>
								<Button colored>
									<a
										href="https://play.google.com/store/apps/details?id=com.ludde86.createyourlist"
										target="_blank"
										rel="noopener noreferrer"
										className="project-link"
									>
										googleplay: ludde86.createyourlist
									</a>
								</Button>
							</CardActions>
						</Card>
					</div>
				);
			case 4:
				return (
					<div>
						<Webdesign1 />
					</div>
				);
			case 5:
				return (
					<div>
						<h1>This is Css</h1>
						<Challenge1 />
					</div>
				);
			case 6:
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
		<div>
			<Tabs style={{ paddingTop: 46 }} activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
				<Tab style={{ fontWeight: 'bold' }}>Napra2</Tab>
				<Tab style={{ fontWeight: 'bold' }}>Napra1</Tab>
				<Tab style={{ fontWeight: 'bold' }}>HTProject</Tab>
				<Tab style={{ fontWeight: 'bold' }}>React Native</Tab>
				<Tab style={{ fontWeight: 'bold' }}>React</Tab>
				{/*
				<Tab style={{ fontWeight: 'bold' }}>CSS</Tab>
			*/}
				{/*
					<Tab>JavaScript</Tab>
					<Tab>Java</Tab>
					<Tab>Spring</Tab>
				*/}
			</Tabs>



			<div className="content">{toggleCategories()}</div>


		</div>
	);
};

export default Projects;
