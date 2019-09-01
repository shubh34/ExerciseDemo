

import React from 'react';
import { shallow } from 'enzyme';

import { MovieDetailsHero } from './MovieDetailsHero';


const setUp = (container = shallow) => {
	const wrapper = container(
		<MovieDetailsHero heroUrl="test.jpg">
			<div>Wrapper</div>
		</MovieDetailsHero>,
	);
	return { wrapper };
};

describe('MovieDetailsHero', () => {
	it('should render children in wrapper', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
});
