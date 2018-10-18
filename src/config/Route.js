import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../components/Home';
import Index from '../components/Index';
import AppliedRoute from './AppliedRoute';

 const Route = ({ childProps }) => (
	<Switch>
    	<AppliedRoute path="/" exact component={Index} props={childProps} />
		<AppliedRoute path="/Home" exact component={Home} props={childProps} />
	</Switch>
);

export default Route;