import { getMovieDetails, resetMovieDetails } from './action';


describe('movie details action', () => {
	it('should create action for getting movie details', () => {
		expect(getMovieDetails('test')).toMatchSnapshot();
	});
	it('should create action to reset movie details', () => {
		expect(resetMovieDetails()).toMatchSnapshot();
	});
});
