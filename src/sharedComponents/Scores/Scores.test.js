import React from 'react';
import { shallow } from 'enzyme';
import Scores from './Scores';

it('renders without crashing', () => {
	const div = shallow(<Scores score='2' votes="2000" />);
	expect(div).toMatchSnapshot();
});
