import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import App from './App';
import config from './config/aws-exports';
import registerServiceWorker from './registerServiceWorker';

Amplify.configure(config);

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);

registerServiceWorker();