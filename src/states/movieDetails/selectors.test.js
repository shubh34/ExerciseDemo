import { getMovieTitle, getSnapshotImageUrl, getMovieDescription, getVotes, getScore } from './selectors';
import { movieDetailsStub } from '../../../tests-stub/MovieDetails';

const state = { movieDetails: movieDetailsStub };

describe('MovieListing Selector', () => {
	it('should return getMovieTitle', () => {
		expect(getMovieTitle(state)).toMatchSnapshot();
	});
	it('should return snapshot url ', () => {
		expect(getSnapshotImageUrl(state)).toMatchSnapshot();
	});

	it('should return details', () => {
		expect(getMovieDescription(state)).toMatchSnapshot();
	});

	it('should return votes', () => {
		expect(getVotes(state)).toMatchSnapshot();
	});
	it('should return score', () => {
		expect(getScore(state)).toMatchSnapshot();
	});
});
