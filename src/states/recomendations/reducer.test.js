import reducer from './reducer';
import { GET_MOVIE_RECOMENDATION_REQUEST, GET_MOVIE_RECOMENDATION_SUCCESS } from './action';

const state = {
	trailer: {
		videoUrl: 'a/b'
	}
};
describe('Reducer movie trailer', () => {
	it('should update store on GET_MOVIE_RECOMENDATION_SUCCESS', () => {
		const action = {
			type: GET_MOVIE_RECOMENDATION_SUCCESS,
			payload: {
				movieRecomendation: [
					{
						movieId: '1'
					}
				]
			}
		};
		const updateState = reducer(state, action);
		expect(updateState).toMatchSnapshot();
	});
	it('should update storeto default state on GET_MOVIE_RECOMENDATION_REQUEST', () => {
		const action = {
			type: GET_MOVIE_RECOMENDATION_REQUEST
		};
		const updateState = reducer(state, action);
		expect(updateState).toMatchSnapshot();
	});
});
