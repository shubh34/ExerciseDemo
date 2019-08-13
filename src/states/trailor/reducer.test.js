import reducer from './reducer';
import { GET_MOVIE_TRAILOR_SUCCESS, GET_MOVIE_TRAILOR_FAILURE } from './action';

const state = {
	trailor: {
		videoUrl: 'a/b',
	},
};
describe('Reducer movie trailor', () => {
	it('should update store on GET_MOVIE_TRAILOR_SUCCESS', () => {
		const action = {
			type: GET_MOVIE_TRAILOR_SUCCESS,
			payload: { videoUrl: 'abc' },
		};
		const updateState = reducer(
			state, action,
		);
		expect(updateState).toMatchSnapshot();
	});
	it('should update store on GET_MOVIE_TRAILOR_SUCCESS', () => {
		const action = {
			type: GET_MOVIE_TRAILOR_FAILURE,
			payload: { error: 'something went wrong' },
		};
		const updateState = reducer(
			state, action,
		);
		expect(updateState).toMatchSnapshot();
	});
});
