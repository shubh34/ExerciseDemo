import { isRSAA, RSAA } from 'redux-api-middleware';

export const getCachedApiResponseMiddleware = () => () => next => (action) => {
	if (!isRSAA(action)) {
		return next(action);
	}
	const cachedApiResponseString = sessionStorage.getItem(action[RSAA].endpoint);
	if (cachedApiResponseString) {
		const cachedApiResponse = JSON.parse(cachedApiResponseString);
		const nextAction = {
			[RSAA]: {
				...action[RSAA],
				fetch: async () => new Response(JSON.stringify(cachedApiResponse.response),
					{
						status: 200,
						headers: {
							'Content-Type': 'application/json',
						},
					}),
			},
		};
		return next(nextAction);
	}
	return next(action);
};
