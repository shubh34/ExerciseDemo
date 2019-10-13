import { GET_MOVIE_RECOMENDATION_REQUEST, GET_MOVIE_RECOMENDATION_SUCCESS } from './action';

const defaultState = {};
const reducer = (state = defaultState, action) => {
	switch (action.type) {
	case GET_MOVIE_RECOMENDATION_SUCCESS:
		return {
			...state,
			...action.payload,
		};
	case GET_MOVIE_RECOMENDATION_REQUEST:
		return defaultState;
	default:
		return state;
	}
};
export default reducer;
