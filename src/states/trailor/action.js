import { RSAA } from 'redux-api-middleware';
import endPoints from '../../configs/endPoints';

export const GET_MOVIE_TRAILOR_REQUEST = 'GET_MOVIE_TRAILOR_REQUEST';
export const GET_MOVIE_TRAILOR_SUCCESS = 'GET_MOVIE_TRAILOR_SUCCESS';
export const GET_MOVIE_TRAILOR_FAILURE = 'GET_MOVIE_TRAILOR_FAILURE';


export const getMovieTrailor = () => {
	const endPoint = endPoints.getMovieTrailer;
	const url = endPoint.resolve();
	return {
		[RSAA]: {
			endpoint: url,
			method: endPoint.method,
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json',

			},
			body: JSON.stringify({
				audio_language: 'SPA',
				audio_quality: '2.0',
				content_id: 'matrix',
				content_type: 'movies',
				device_serial: 'device_serial_1',
				device_stream_video_quality: 'FHD',
				player: 'web:PD-NONE',
				subtitle_language: 'MIS',
				video_type: 'trailer',
			}),
			types: [GET_MOVIE_TRAILOR_REQUEST, GET_MOVIE_TRAILOR_SUCCESS, GET_MOVIE_TRAILOR_FAILURE],
		},
	};
};
