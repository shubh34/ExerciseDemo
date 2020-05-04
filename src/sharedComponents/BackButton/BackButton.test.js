import React from 'react';
import { shallow } from 'enzyme';
import BackButton from './BackButton';

describe('BackButton', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<BackButton title='xyz' onClick={jest.fn()} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should call onClick on button click', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<BackButton title='xyz' onClick={onClick} />);
		wrapper.find('button').simulate('click');
		expect(onClick).toBeCalled();
	});
});
