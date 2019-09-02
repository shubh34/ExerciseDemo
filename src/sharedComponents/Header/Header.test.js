import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
	const div = shallow(<Header header='Test' />);
	expect(div).toMatchSnapshot();
});
