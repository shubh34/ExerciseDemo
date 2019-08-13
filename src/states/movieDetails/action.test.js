import { getMovieDetails } from './action';


describe('movie details action', () => {
	it('should create action for getting movie details', () => {
		expect(getMovieDetails('test')).toMatchSnapshot();
	});
});
