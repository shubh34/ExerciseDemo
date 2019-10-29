/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { endPointMiddleWare } from './middleware/createEndPointMiddleware';
import { getCachedApiResponseMiddleware } from './middleware/getCachedApiResponseMiddleware';

export default (initialState = {}) => {
	const middleWares =	process.env.NODE_ENV === 'production'
		? applyMiddleware(endPointMiddleWare(), getCachedApiResponseMiddleware(), apiMiddleware, thunk)
		: composeWithDevTools(
			applyMiddleware(endPointMiddleWare(), getCachedApiResponseMiddleware(), apiMiddleware, thunk)
		);
	return createStore(reducers, initialState, middleWares);
};
