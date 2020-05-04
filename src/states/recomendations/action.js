import { RSAA } from 'redux-api-middleware';
import endPoints from '../../configs/endPoints';

export const GET_MOVIE_RECOMENDATION_REQUEST = 'GET_MOVIE_RECOMENDATION_REQUEST';
export const GET_MOVIE_RECOMENDATION_SUCCESS = 'GET_MOVIE_RECOMENDATION_SUCCESS';
export const GET_MOVIE_RECOMENDATION_FAILURE = 'GET_MOVIE_RECOMENDATION_FAILURE';

export const fetchRecomendationForMovie = id => {
	const endPoint = endPoints.getRecomendationForMovie;
	const url = endPoint.resolve(id);
	return {
		[RSAA]: {
			endpoint: url,
			method: endPoint.method,
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json'
			},
			types: [GET_MOVIE_RECOMENDATION_REQUEST, GET_MOVIE_RECOMENDATION_SUCCESS, GET_MOVIE_RECOMENDATION_FAILURE]
		}
	};
};
