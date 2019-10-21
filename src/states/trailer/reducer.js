import { GET_MOVIE_TRAILOR_SUCCESS, GET_MOVIE_TRAILOR_REQUEST } from './action';

const defaultState = {};
const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_MOVIE_TRAILOR_SUCCESS:
			return {
				...state,
				...action.payload
			};
		case GET_MOVIE_TRAILOR_REQUEST:
			return defaultState;
		default:
			return state;
	}
};
export default reducer;
