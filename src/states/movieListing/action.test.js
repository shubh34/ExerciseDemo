import { fetchMovieListByCategory } from './action';


describe('movie list action', () => {
	it('should create action for getting movie list', () => {
		expect(fetchMovieListByCategory('test')).toMatchSnapshot();
	});
});
