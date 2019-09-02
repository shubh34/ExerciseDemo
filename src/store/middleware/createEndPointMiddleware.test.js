import { RSAA } from 'redux-api-middleware';
import { endPointMiddleWare, apiBaseUrl, getActionTypesWithCacheKey } from './createEndPointMiddleware';
import { GET_MOVIE_LIST_BY_CATEGORY_SUCCESS } from '../../states/movieListing/action';


const setup = (
	next = jest.fn(),
) => ({
	next,
	middleware: endPointMiddleWare()()(next),
});

describe('createEndpointMiddleware', () => {
	it('calls next with original action if not RSAA action', () => {
		const { middleware, next } = setup();
		const action = {
			types: 'DEMO_TEST',
		};

		middleware(action);
		expect(next).toBeCalledWith(action);
	});

	it('should add apiBase Url and query param', () => {
		const { middleware, next } = setup();

		const action = {
			[RSAA]: {
				endpoint: 'test/RSAA',
				types: [],
			},
		};

		middleware(action);

		expect(next).toBeCalledWith(
			expect.objectContaining({
				[RSAA]: {
					endpoint: `${apiBaseUrl}test/RSAA?classification_id=5&device_identifier=web&locale=es&market_code=es`,
					types: [],
				},
			}),
		);
	});
	describe('getActionTypesWithCacheKey', () => {
		it('should not return typeWithCacheKey when api not to be cached', () => {
			expect(getActionTypesWithCacheKey([{ type: 'test' }], 'cacheKey')).toMatchSnapshot();
		});
		it('should return typeWithCacheKey when api is to be cached', () => {
			expect(getActionTypesWithCacheKey([{ type: GET_MOVIE_LIST_BY_CATEGORY_SUCCESS }], 'cacheKey')).toMatchSnapshot();
		});
	});
});
