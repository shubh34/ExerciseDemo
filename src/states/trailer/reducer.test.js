import reducer from './reducer';
import { GET_MOVIE_TRAILOR_SUCCESS, GET_MOVIE_TRAILOR_REQUEST } from './action';

const state = {
	trailer: {
		videoUrl: 'a/b'
	}
};
describe('Reducer movie trailer', () => {
	it('should update store on GET_MOVIE_TRAILOR_SUCCESS', () => {
		const action = {
			type: GET_MOVIE_TRAILOR_SUCCESS,
			payload: { videoUrl: 'abc' }
		};
		const updateState = reducer(state, action);
		expect(updateState).toMatchSnapshot();
	});
	it('should update storeto default state on GET_MOVIE_TRAILOR_REQUEST', () => {
		const action = {
			type: GET_MOVIE_TRAILOR_REQUEST
		};
		const updateState = reducer(state, action);
		expect(updateState).toMatchSnapshot();
	});
});
