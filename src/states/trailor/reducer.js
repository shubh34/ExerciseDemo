import { GET_MOVIE_TRAILOR_SUCCESS } from './action';


const reducer = (state = {}, action) => {
	switch (action.type) {
	case GET_MOVIE_TRAILOR_SUCCESS:
		return {
			...state,
			trailor: action.payload,
		};
	default:
		return state;
	}
};
export default reducer;
