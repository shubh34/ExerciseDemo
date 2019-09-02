import { RSAA } from 'redux-api-middleware';
import endPoints from '../../configs/endPoints';


export const GET_MOVIE_DETAILS_REQUEST = 'GET_MOVIE_DETAILS_REQUEST';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_FAILURE = 'GET_MOVIE_DETAILS_FAILURE';

export const RESET_MOVIE_DETAILS = 'RESET_MOVIE_DETAILS';

export const getMovieDetails = (movieName) => {
	const endPoint = endPoints.getMovieDetails;
	const url = endPoint.resolve(movieName);
	return {
		[RSAA]: {
			endpoint: url,
			method: endPoint.method,
			types: [GET_MOVIE_DETAILS_REQUEST, GET_MOVIE_DETAILS_SUCCESS, GET_MOVIE_DETAILS_FAILURE],
		},
	};
};

export const resetMovieDetails = () => ({
	type: RESET_MOVIE_DETAILS,
});
