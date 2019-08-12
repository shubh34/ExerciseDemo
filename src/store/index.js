import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './reducers';
// import { stubMiddleware } from './middleware/createStubMiddleware';

// const getStubMiddleWare = () => {
// 	if (process.env.NODE_ENV === 'development') {
// 		return stubMiddleware();
// 	}
// };
export default (initialState = []) => {
	const composedEnhancers = composeWithDevTools();
	return createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware(apiMiddleware),
			composedEnhancers,
		),
	);
};
