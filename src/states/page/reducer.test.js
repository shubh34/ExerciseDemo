import reducer from './reducer';
import { GET_MOVIE_DETAILS_SUCCESS, GET_MOVIE_DETAILS_FAILURE } from './action';

const state = {
	details: {
		movieName: 'test',
	},
};
describe('Reducer movie details', () => {
	it('should update store on GET_MOVIE_DETAILS_SUCCESS', () => {
		const action = {
			type: GET_MOVIE_DETAILS_SUCCESS,
			payload: { movieName: 'matrix' },
		};
		const updateState = reducer(
			state, action,
		);
		expect(updateState).toMatchSnapshot();
	});
	it('should update store on GET_MOVIE_DETAILS_FAILURE', () => {
		const action = {
			type: GET_MOVIE_DETAILS_FAILURE,
			payload: { error: 'something went wrong' },
		};
		const updateState = reducer(
			state, action,
		);
		expect(updateState).toMatchSnapshot();
	});
});
