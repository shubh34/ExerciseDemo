/* eslint-disable import/no-mutable-exports */
import { isRSAA, RSAA } from 'redux-api-middleware';
import { GET_MOVIE_LIST_BY_CATEGORY_SUCCESS } from '../../states/movieListing/action';

export const apiBaseUrl = 'https://gizmo.rakuten.tv/v3/';

export const apiToBeCached = [GET_MOVIE_LIST_BY_CATEGORY_SUCCESS];

export const getActionTypesWithCacheKey = (types, endPointWithQueryParam) =>
	types.map(action => {
		if (action instanceof Object && apiToBeCached.includes(action.type)) {
			return {
				...action,
				meta: {
					...action.meta,
					cacheKey: endPointWithQueryParam
				}
			};
		}
		return action;
	});

export const endPointMiddleWare = () => () => next => action => {
	if (!isRSAA(action)) {
		return next(action);
	}
	const endPoint = action[RSAA].endpoint;
	const endPointWithBAseUrl = apiBaseUrl + endPoint;
	const endPointWithQueryParam = `${endPointWithBAseUrl}?classification_id=5&device_identifier=web&locale=es&market_code=es`;
	const types = getActionTypesWithCacheKey(action[RSAA].types, endPointWithQueryParam);
	const nextAction = {
		[RSAA]: {
			...action[RSAA],
			types,
			endpoint: endPointWithQueryParam
		}
	};

	return next(nextAction);
};
