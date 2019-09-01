import { RSAA } from 'redux-api-middleware';
import endPoints from '../../configs/endPoints';
import { cacheApiResponse } from '../../utils/cacheApiUtils';

export const GET_MOVIE_LIST_BY_CATEGORY_REQUEST = 'GET_MOVIE_LIST_BY_CATEGORY_REQUEST';
export const GET_MOVIE_LIST_BY_CATEGORY_SUCCESS = 'GET_MOVIE_LIST_BY_CATEGORY_SUCCESS';
export const GET_MOVIE_LIST_BY_CATEGORY_FAILURE = 'GET_MOVIE_LIST_BY_CATEGORY_FAILURE';

export const createRSAAMovieListReuest = (categoryName) => {
	const endPoint = endPoints.fetchMovieListByCategory;
	const url = endPoint.resolve(categoryName);
	const success = { type: GET_MOVIE_LIST_BY_CATEGORY_SUCCESS, meta: { id: categoryName, cacheKey: GET_MOVIE_LIST_BY_CATEGORY_REQUEST } };
	const failure = { type: GET_MOVIE_LIST_BY_CATEGORY_FAILURE, meta: { id: categoryName } };
	return {
		[RSAA]: {
			endpoint: url,
			method: endPoint.method,
			types: [GET_MOVIE_LIST_BY_CATEGORY_REQUEST, success, failure],
		},
	};
};

export const fetchMovieListByCategory = categoryName => dispatch => dispatch(createRSAAMovieListReuest(categoryName)).then((response) => {
	cacheApiResponse(response);
});
