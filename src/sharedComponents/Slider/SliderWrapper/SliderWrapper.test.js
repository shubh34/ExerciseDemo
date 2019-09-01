
import React from 'react';
import { shallow } from 'enzyme';

import SliderWrapper from './SliderWrapper';


const setUp = (container = shallow) => {
	const wrapper = container(
		<SliderWrapper>
			<div>Wrapper</div>
		</SliderWrapper>,
	);
	return { wrapper };
};

describe('SliderWrapper', () => {
	it('should render childeren in wrapper', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
});
