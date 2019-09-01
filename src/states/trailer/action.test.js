import { getMovieTrailer } from './action';


describe('movie trailer action', () => {
	it('should create action for getting movie trailer', () => {
		expect(getMovieTrailer('test')).toMatchSnapshot();
	});
});
