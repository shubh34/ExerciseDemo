import { GET_MOVIE_LIST_BY_CATEGORY_SUCCESS } from '../movieListing/action';

const reducer = (state = [], action) => {
	switch (action.type) {
	case GET_MOVIE_LIST_BY_CATEGORY_SUCCESS:
		console.log(action.payload);
	default:
		return state;
	}
};
export default reducer;
