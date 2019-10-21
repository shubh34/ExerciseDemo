import { GET_MOVIE_LIST_BY_CATEGORY_SUCCESS, GET_MOVIE_LIST_BY_CATEGORY_FAILURE } from './action';

const reducer = (state = {}, action) => {
	switch (action.type) {
		case GET_MOVIE_LIST_BY_CATEGORY_SUCCESS:
			return {
				...state,
				[action.meta.id]: action.payload
			};
		case GET_MOVIE_LIST_BY_CATEGORY_FAILURE:
			return {
				...state,
				[action.meta.id]: action.payload
			};
		default:
			return state;
	}
};
export default reducer;
