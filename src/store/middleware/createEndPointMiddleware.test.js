import { RSAA } from 'redux-api-middleware';
import { endPointMiddleWare, apiBaseUrl } from './createEndPointMiddleware';


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
			type: 'DEMO_TEST',
		};

		middleware(action);
		expect(next).toBeCalledWith(action);
	});

	it('should add apiBase Url and query param', () => {
		const { middleware, next } = setup();

		const action = {
			[RSAA]: {
				endpoint: 'test/RSAA',
			},
		};

		middleware(action);

		expect(next).toBeCalledWith(
			expect.objectContaining({
				[RSAA]: {
					endpoint: `${apiBaseUrl}test/RSAA?classification_id=5&device_identifier=web&locale=es&market_code=es`,
				},
			}),
		);
	});
});
