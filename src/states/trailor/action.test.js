import { getMovieTrailor } from './action';


describe('movie trailor action', () => {
	it('should create action for getting movie trailor', () => {
		expect(getMovieTrailor('test')).toMatchSnapshot();
	});
});
