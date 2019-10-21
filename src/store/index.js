/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { endPointMiddleWare } from './middleware/createEndPointMiddleware';
import { getCachedApiResponseMiddleware } from './middleware/getCachedApiResponseMiddleware';

export default (initialState = {}) =>
	createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware(endPointMiddleWare(), getCachedApiResponseMiddleware(), apiMiddleware, thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
		)
	);
