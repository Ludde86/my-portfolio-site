import React from 'react';
import { Route, Switch } from 'react-router';
import Landing from './landingpage';
import Resume from './resume';
import Projects from './projects';
import Dictionary from './dictionary';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route path="/resume" component={Resume} />
		<Route path="/projects" component={Projects} />
		<Route path="/dictionary" component={Dictionary} />
	</Switch>
);

export default Main;
