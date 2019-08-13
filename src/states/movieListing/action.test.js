import { getMovieListByCategory } from './action';


describe('movie list action', () => {
	it('should create action for getting movie list', () => {
		expect(getMovieListByCategory('test')).toMatchSnapshot();
	});
});
