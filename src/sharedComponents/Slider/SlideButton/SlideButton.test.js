
import React from 'react';
import { shallow } from 'enzyme';
import SlideButton from './SlideButton';

describe('SlideButton', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<SlideButton type="next" onClick={jest.fn()} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should call onClick on button click', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<SlideButton type="prev" onClick={onClick} />);
		wrapper.find('button').simulate('click');
		expect(onClick).toBeCalled();
	});
});
