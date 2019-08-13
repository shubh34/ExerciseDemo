import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store';
import LayoutContainer from '../LayoutContainer/LayoutContainer';


const store = configureStore();

const App = () => (
	<Provider store={store}>
		<LayoutContainer test="props test" />
	</Provider>
);

export default App;
