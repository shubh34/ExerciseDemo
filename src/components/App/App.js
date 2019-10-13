import './App.scss';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from '../../store';

const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const MovieTrailer = lazy(() => import('../MovieTrailer/MovieTrailer'));
const Home = lazy(() => import('../Home/Home'));


const store = configureStore();

const App = () => (
	<div className="app">
		<Provider store={store}>

			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/movies/:id' component={MovieDetails} />
						<Route exact path='/streams/movie/:id' component={MovieTrailer} />
						<Route component={Home} />
					</Switch>
				</Suspense>
			</Router>
		</Provider>
	</div>
);

export default React.memo(App);
