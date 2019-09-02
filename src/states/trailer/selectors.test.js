import { getMovieTrailerUrl } from './selectors';
import { trailer } from '../../../tests-stub/Trailer';

describe('Trailer Selector', () => {
	it('should return trailer url', () => {
		const state = { trailer };
		expect(getMovieTrailerUrl(state)).toMatchSnapshot();
	});
});
