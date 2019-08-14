import { goToPage } from './action';


describe('movie details action', () => {
	it('should create action for getting movie details', () => {
		expect(goToPage('test')).toMatchSnapshot();
	});
});
