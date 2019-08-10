import React from 'react';
import { shallow } from 'enzyme';
import Test from './js/components/Test';

describe('First React component test with Enzyme', () => {
	it('renders without crashing', () => {
		expect(shallow(<Test />)).toMatchSnapshot();
	});
});
