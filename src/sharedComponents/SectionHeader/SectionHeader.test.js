import React from 'react';
import { shallow } from 'enzyme';
import SectionHeader from './SectionHeader';

it('renders without crashing', () => {
	const div = shallow(<SectionHeader header='Header' />);
	expect(div).toMatchSnapshot();
});
