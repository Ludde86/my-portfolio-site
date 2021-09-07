import React from 'react';
import { Route, Switch } from 'react-router';
import Landing from './landingpage';
import Resume from './resume';
import Projects from './projects';
import About from './aboutme';
import Contact from './contact';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route path="/resume" component={Resume} />
		<Route path="/projects" component={Projects} />
		{/*
		<Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
		*/}
	</Switch>
);

export default Main;
