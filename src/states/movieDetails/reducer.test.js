import reducer from './reducer';
import { GET_MOVIE_DETAILS_SUCCESS, GET_MOVIE_DETAILS_FAILURE, RESET_MOVIE_DETAILS } from './action';

const state = {
	details: {
		movieName: 'test'
	}
};
describe('Reducer movie details', () => {
	it('should update store on GET_MOVIE_DETAILS_SUCCESS', () => {
		const action = {
			type: GET_MOVIE_DETAILS_SUCCESS,
			payload: { movieName: 'matrix' }
		};
		const updateState = reducer(state, action);
		expect(updateState).toMatchSnapshot();
	});
	it('should update store on GET_MOVIE_DETAILS_FAILURE', () => {
		const action = {
			type: GET_MOVIE_DETAILS_FAILURE,
			payload: { error: 'something went wrong' }
		};
		const updateState = reducer(state, action);
		expect(updateState).toMatchSnapshot();
	});
	it('should reset store on RESET_MOVIE_DETAILS', () => {
		const action = {
			type: RESET_MOVIE_DETAILS
		};
		const updateState = reducer(state, action);
		expect(updateState).toMatchSnapshot();
	});
});
