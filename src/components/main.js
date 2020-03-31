import React from 'react';
import { Route, Switch } from 'react-router';
import Landing from './landingpage';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
	</Switch>
);

export default Main;
