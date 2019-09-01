import { getMovieListByCategory, getMovieListHeader } from './selectors';
import { rawMovies } from '../../../tests-stub/Movies';

describe('MovieListing Selector', () => {
	it('should return Movie list header', () => {
		const state = { movieListing: rawMovies };
		expect(getMovieListHeader(state, 'populares-en-taquilla')).toMatchSnapshot();
	});
	it('should return Movie list ', () => {
		const state = { movieListing: rawMovies };
		expect(getMovieListByCategory(state, 'populares-en-taquilla')).toMatchSnapshot();
	});

	it('should return Movie list as empty when category is not in state ', () => {
		const state = { movieListing: rawMovies };
		expect(getMovieListByCategory(state, 'populares-en-taquillhjk')).toEqual([]);
	});
});
