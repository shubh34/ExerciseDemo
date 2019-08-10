import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store';


const store = configureStore(['test']);

const App = () => (
	<Provider store={store}>
		<div>Hello Test </div>
	</Provider>
);

export default App;
