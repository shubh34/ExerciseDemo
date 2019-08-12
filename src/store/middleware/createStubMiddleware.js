/* eslint-disable import/no-mutable-exports */
import { isRSAA, RSAA } from 'redux-api-middleware';
import head from 'lodash/head';


const actionStubs = {
	//	[SUBMIT_PAYMENT_REVIEW_REQUEST]: getAuthorisationStub,
};

const actionStatusStubs = {
	//	[SUBMIT_PAYMENT_REVIEW_REQUEST]: 200,
};

export const stubMiddleware = () => () => next => (action) => {
	if (!isRSAA(action)) {
		return next(action);
	}
	// eslint-disable-next-line
		console.log('Request', action[RSAA].method, action[RSAA].endpoint, action[RSAA].types[0], action[RSAA].body);

	const nextAction = {
		[RSAA]: {
			...action[RSAA],
			fetch: () => new Promise((resolve) => {
				const actionType = head(action[RSAA].types);
				const getResponseForAction = actionStubs[actionType];

				const status = actionStatusStubs[actionType];
				const body = action[RSAA].body ? JSON.parse(action[RSAA].body) : null;
				const response = getResponseForAction(body);
				setTimeout(() => {
					resolve(
						new Response(JSON.stringify(response), {
							status,
							headers: action[RSAA].headers,
						}),
					);
				}, 100);
			}),
		},
	};

	return next(nextAction);
};
