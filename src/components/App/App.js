import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';

import configureStore from '../../store';
import LayoutContainer from '../LayoutContainer/LayoutContainer';


const store = configureStore();

const App = () => (
	<Provider store={store}>
		<div className="test">
			<LayoutContainer test="props test" />
		</div>
	</Provider>
);

export default App;
