import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from './PageHeader';

it('renders without crashing', () => {
	const wrapper = shallow(<PageHeader />);
	expect(wrapper).toMatchSnapshot();
});
