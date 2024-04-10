import React from 'react';
import { Route, Switch } from 'react-router';
import Haningetk1 from '../HaningeTK1';

const Main = () => (
    <Switch>
        <Route exact path="/projects" component={Haningetk1} />
        <Route exact path="/projects/home" component={ } />
        <Route path="/projects/services" component={ } />
        <Route path="/projects/about" component={ } />
        <Route path="/projects/brands" component={ } />
    </Switch>
);

export default Main;
