import { fetchRecomendationForMovie } from './action';

describe('movie recomendation action', () => {
	it('should fetch the movie recomendation', () => {
		expect(fetchRecomendationForMovie('test')).toMatchSnapshot();
	});
});
