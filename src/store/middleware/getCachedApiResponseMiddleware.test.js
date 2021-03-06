import { RSAA } from 'redux-api-middleware';
import { getCachedApiResponseMiddleware } from './getCachedApiResponseMiddleware';
import { cacheApiResponse } from '../../utils/cacheApiUtils';

const setup = (next = jest.fn()) => ({
	next,
	middleware: getCachedApiResponseMiddleware()()(next)
});

describe('getCachedApiResponseMiddleware', () => {
	it('calls next with original action if not RSAA action', () => {
		const { middleware, next } = setup();
		const action = {
			type: 'DEMO_TEST'
		};

		middleware(action);
		expect(next).toBeCalledWith(action);
	});

	it('should get the response from session storage', () => {
		const { middleware, next } = setup();
		const response = {
			meta: { cacheKey: 'GET_MOVIE_LIST_BY_CATEGORY_SUCCESS' },
			payload: { test: 'new Response' }
		};
		cacheApiResponse(response);
		const action = {
			[RSAA]: {
				endpoint: 'test/RSAA',
				types: ['GET_MOVIE_LIST_BY_CATEGORY_SUCCESS']
			}
		};

		middleware(action);

		expect(next).toMatchSnapshot();
	});
	it('should call the the api when the response not in session storage', () => {
		const { middleware, next } = setup();

		const action = {
			[RSAA]: {
				endpoint: 'test/RSAA'
			}
		};

		middleware(action);

		expect(next).toBeCalledWith(
			expect.objectContaining({
				[RSAA]: {
					endpoint: 'test/RSAA'
				}
			})
		);
	});
});
