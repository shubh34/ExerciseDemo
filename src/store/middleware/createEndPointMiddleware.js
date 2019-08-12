/* eslint-disable import/no-mutable-exports */
import { isRSAA, RSAA } from 'redux-api-middleware';

export const apiBaseUrl = 'https://gizmo.rakuten.tv/v3/';

export const endPointMiddleWare = () => () => next => (action) => {
	if (!isRSAA(action)) {
		return next(action);
	}
	const endPoint = action[RSAA].endpoint;
	const endPointWithBAseUrl = apiBaseUrl + endPoint;
	const endPointWithQueryParam = `${endPointWithBAseUrl}?classification_id=5&device_identifier=web&locale=es&market_code=es`;
	const nextAction = {
		[RSAA]: {
			...action[RSAA],
			endpoint: endPointWithQueryParam,
		},
	};

	return next(nextAction);
};
