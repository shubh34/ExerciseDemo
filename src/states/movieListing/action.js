import { RSAA } from 'redux-api-middleware';
import endPoints from '../../configs/endPoints';

export const GET_MOVIE_LIST_BY_CATEGORY_REQUEST = 'GET_MOVIE_LIST_BY_CATEGORY_REQUEST';
export const GET_MOVIE_LIST_BY_CATEGORY_SUCCESS = 'GET_MOVIE_LIST_BY_CATEGORY_SUCCESS';
export const GET_MOVIE_LIST_BY_CATEGORY_FAILURE = 'GET_MOVIE_LIST_BY_CATEGORY_FAILURE';

export const getMovieListByCategory = (categoryName) => {
	const endPoint = endPoints.getMovieListByCategory;
	const url = endPoint.resolve(categoryName);
	const success = { type: GET_MOVIE_LIST_BY_CATEGORY_SUCCESS, meta: { id: categoryName } };
	const failure = { type: GET_MOVIE_LIST_BY_CATEGORY_FAILURE, meta: { id: categoryName } };
	return {
		[RSAA]: {
			endpoint: url,
			method: endPoint.method,
			types: [GET_MOVIE_LIST_BY_CATEGORY_REQUEST, success, failure],
		},
	};
};
