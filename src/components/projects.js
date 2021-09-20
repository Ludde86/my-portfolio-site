import React, { useState } from 'react';
import './projects.css';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

const Projects = () => {
	const [ activeTab, setActiveTab ] = useState(0);

	const toggleCategories = () => {
		switch (activeTab) {
			case 0:
				return (
					<div className="projects-container">
						<Card shadow={5} className="card-container">
							<CardTitle
								style={{
									color: '#fff',
									minHeight: '126px',
									background: 'url("/todo-image.png") center / cover',
									margin: 12,
									borderRadius: 6
								}}
							/>

							<CardText className="card-text">
								<h5>Todo List - Webbapplikation</h5>
								<p>
									Mitt startprojekt för att fördjupa mig i både webbutveckling och i att lagra/hämta
									data via en databas.
								</p>
								<p>
									Tanken är att vidareutveckla denna sida så att jag sedan kan koppla ihop denna med
									en liknande mobilapp som jag har skapat. Man kommer då att i både webbtjänsten och i
									appen att i realtid kunna se den information som läggs till eller uppdateras.
								</p>
								<p>Plattformen som används på denna webbsida för att hosta och lagra data är Heroku.</p>
							</CardText>

							<CardActions border>
								<Button colored>
									<a
										href="https://klovisattgora.herokuapp.com"
										target="_blank"
										rel="noopener noreferrer"
										className="project-link"
									>
										klovisattgora.herokuapp.com
									</a>
								</Button>
							</CardActions>
							{/*
							<CardMenu style={{ color: '#fff' }}>
								<IconButton name="share" />
								</CardMenu>
							*/}
						</Card>

						<Card shadow={5} className="card-container">
							<CardTitle
								style={{
									color: '#fff',
									minHeight: '126px',
									background: 'url("/dymt-image.png") center / cover',
									margin: 12,
									borderRadius: 12
								}}
							/>

							<CardText className="card-text">
								<h5>Videos - Webbapplikation </h5>
								<p>
									En webbsida där jag själv väljer vilka klipp ifrån youtube som skall visas, genom
									klippets url.
								</p>
								<p>
									Här är syftet att locka hit andra användare som via denna sida endast ser de klipp
									som tex. jag har skapat. Tanken med denna sida är även att om det i framtiden skapas
									trafik hit, skall reklam kunna generera intäkter.
								</p>
								<p>Detta är just nu en "leksida/testsida" för mig.</p>
								<p>Plattformen som används på denna webbsida för att hosta är Firebase.</p>
							</CardText>
							<CardActions border>
								<Button colored>
									<a
										href="https://didyoumissthisvideos.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="project-link"
									>
										didyoumissthisvideos.com
									</a>
								</Button>
							</CardActions>
						</Card>

						<Card shadow={5} className="card-container">
							<CardTitle
								style={{
									color: '#fff',
									minHeight: '126px',
									background: 'url("/hemsida-image.png") center / cover',
									margin: 12,
									borderRadius: 12
								}}
							/>
							<CardText className="card-text">
								<h5>Min Hemsida </h5>
								<p>
									Syftet här är att kunna visa upp de kunskaper jag besitter och de projekt jag
									arbetar/arbetat med.
								</p>
								<p>Här kommer även all annan information om mig att läggas ut.</p>
								<p>Plattformen som används på denna webbsida för att hosta är Netifly.</p>
							</CardText>
							<CardActions border>
								<Button colored>
									<a
										href="https://ludvigbjorn.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="project-link"
									>
										ludvigbjorn.com
									</a>
								</Button>
							</CardActions>
						</Card>
					</div>
				);
			case 1:
				return (
					<div>
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
		<div style={{ marginTop: 42 }}>
			<Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
				<Tab style={{ fontWeight: 'bold' }}>React</Tab>
				<Tab style={{ fontWeight: 'bold' }}>React Native</Tab>
				{/*
					<Tab>JavaScript</Tab>
					<Tab>Java</Tab>
					<Tab>Spring</Tab>
				*/}
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
