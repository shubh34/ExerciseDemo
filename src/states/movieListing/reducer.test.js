import reducer from './reducer';
import { GET_MOVIE_LIST_BY_CATEGORY_SUCCESS, GET_MOVIE_LIST_BY_CATEGORY_FAILURE } from './action';

const state = {
	123: {
		movie: 1,
		movie2: 2,
	},
};
describe('Reducer movie listing', () => {
	it('should update store on GET_MOVIE_LIST_BY_CATEGORY_SUCCESS', () => {
		const action = {
			type: GET_MOVIE_LIST_BY_CATEGORY_SUCCESS,
			meta: { id: 123 },
			payload: { xyz: 'abc' },
		};
		const updateState = reducer(
			state, action,
		);
		expect(updateState).toMatchSnapshot();
	});
	it('should update store on GET_MOVIE_LIST_BY_CATEGORY_FAILURE', () => {
		const action = {
			type: GET_MOVIE_LIST_BY_CATEGORY_FAILURE,
			meta: { id: 1234 },
			payload: { error: 'something went wrong' },
		};
		const updateState = reducer(
			state, action,
		);
		expect(updateState).toMatchSnapshot();
	});
});
