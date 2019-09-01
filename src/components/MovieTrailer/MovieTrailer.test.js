import React from 'react';
import { shallow } from 'enzyme';

import { MovieTrailer } from './MovieTrailer';
import { trailer } from '../../../tests-stub/Trailer';
import { getMovieTrailerUrl } from '../../states/trailer/selectors';
import BackButton from '../../sharedComponents/BackButton/BackButton';


const setUp = (setUpProps = {}, container = shallow) => {
	const state = { trailer };
	const props = {
		movieTrailerUrl: getMovieTrailerUrl(state),
		getMovieTrailer: jest.fn(),

		match: {
			params: {
				id: 'test',
			},
		},
		history: {
			goBack: jest.fn(),
		},
		...setUpProps,
	};
	const wrapper = container(<MovieTrailer {...props} />);
	return { wrapper, props };
};

describe('MovieTrailer', () => {
	it('should render trailor of movie', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
	it('should naviagte to details page', () => {
		const { wrapper, props } = setUp();
		wrapper.find(BackButton).simulate('click');
		expect(props.history.goBack).toBeCalled();
	});
});
