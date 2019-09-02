import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from '../../store';
import Home from '../Home/Home';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieTrailer from '../MovieTrailer/MovieTrailer';


const store = configureStore();

const App = () => (
	<div className="app">
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/movies/:id' component={MovieDetails} />
					<Route exact path='/streams/movie/:id' component={MovieTrailer} />
					<Route component={Home} />
				</Switch>
			</Router>
		</Provider>
	</div>
);

export default App;
