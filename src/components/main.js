import React from 'react';
import { Route, Switch } from 'react-router';
import Landing from './landingpage';
import Resume from './resume';
import Projects from './projects';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route path="/resume" component={Resume} />
		<Route path="/projects" component={Projects} />
	</Switch>
);

export default Main;
