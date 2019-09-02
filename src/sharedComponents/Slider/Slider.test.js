
import React from 'react';
import { shallow } from 'enzyme';

import { rawMovies } from '../../../tests-stub/Movies';
import { getMovieListByCategory } from '../../states/movieListing/selectors';
import SliderItem from './SliderItem/SliderItem';
import Slider from './Slider';


const setUp = (container = shallow) => {
	const state = { movieListing: rawMovies };
	const movieList = getMovieListByCategory(state, 'populares-en-taquilla');

	const wrapper = container(
		<Slider>
			{movieList.map(
				({
					artwork, score, id, votes,
				}, index) => (
					<SliderItem movie={artwork} score={score} id={id} votes={votes} key={index} ref={React.createRef()} />
				),
			)}
		</Slider>,
	);
	return { wrapper };
};

describe('Slider', () => {
	it('should render Movies in Sliders', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
});
