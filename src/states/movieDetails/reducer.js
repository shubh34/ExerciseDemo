import { GET_MOVIE_DETAILS_SUCCESS } from './action';


const reducer = (state = {}, action) => {
	switch (action.type) {
	case GET_MOVIE_DETAILS_SUCCESS:
		return {
			...state,
			details: action.payload,
		};
	default:
		return state;
	}
};
export default reducer;
