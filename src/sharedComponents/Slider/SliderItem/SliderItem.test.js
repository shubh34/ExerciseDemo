

import React from 'react';
import { shallow } from 'enzyme';

import SliderItem from './SliderItem';


const setUp = (container = shallow) => {
	const props = {
		id: '1',
		movie: 'https://images-2.wuaki.tv/system/artworks/86665/master/capitana-marvel-1560352921.jpeg',
		score: 22,
		votes: '6.6k'
	};
	const wrapper = container(<SliderItem {...props} />);
	return { wrapper };
};

describe('SliderItem', () => {
	it('should render SliderItem', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
});
