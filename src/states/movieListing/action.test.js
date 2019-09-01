import configureStore from 'redux-mock-store';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import { fetchMovieListByCategory, createRSAAMovieListReuest } from './action';

import { cacheApiResponse } from '../../utils/cacheApiUtils';

jest.mock('../../utils/cacheApiUtils');

const mockStore = configureStore([apiMiddleware, thunk]);

describe('movie list action', () => {
	it('should create action for getting movie list', () => {
		expect(createRSAAMovieListReuest('test')).toMatchSnapshot();
	});
	it('fetchTournamentPrizes should call api to fetch prizes', () => {
		const store = mockStore();
		return store.dispatch(fetchMovieListByCategory()).then(() => {
			expect(cacheApiResponse).toBeCalled();
		});
	});
});
