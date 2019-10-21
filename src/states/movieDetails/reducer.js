import { GET_MOVIE_DETAILS_SUCCESS, RESET_MOVIE_DETAILS } from './action';

export const defaultState = {};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_MOVIE_DETAILS_SUCCESS:
			return {
				...state,
				...action.payload
			};
		case RESET_MOVIE_DETAILS:
			return defaultState;

		default:
			return state;
	}
};
export default reducer;
