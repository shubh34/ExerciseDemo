import React from 'react';
import { shallow } from 'enzyme';

import { Movies } from './Movies';
import { rawMovies } from '../../../tests-stub/Movies';
import { getMovieListByCategory } from '../../states/movieListing/selectors';


const setUp = (setUpProps = {}, container = shallow) => {
	const state = { movieListing: rawMovies };
	const props = {
		id: 'populares-en-taquilla',
		fetchMovieList: jest.fn(),
		movieCategoryHeader: 'listingHeader',
		movieList: getMovieListByCategory(state, 'populares-en-taquilla'),
		...setUpProps,
	};
	const wrapper = container(<Movies {...props} />);
	return { wrapper, props };
};

describe('Movies', () => {
	it('should render Movies in Sliders', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
});
