import React from 'react';
import { shallow } from 'enzyme';

import { MovieDetails } from './MovieDetails';
import { movieDetailsStub } from '../../../tests-stub/MovieDetails';
import {
	getSnapshotImageUrl,
	getMovieTitle,
	getMovieDescription,
	getScore,
	getVotes
} from '../../states/movieDetails/selectors';
import RoundAction from '../../sharedComponents/RoundAction/RoundAction';

const setUp = (setUpProps = {}, container = shallow) => {
	const state = { movieDetails: movieDetailsStub };
	const props = {
		snapShotUrl: getSnapshotImageUrl(state),
		movieTitle: getMovieTitle(state),
		movieDescription: getMovieDescription(state),
		score: getScore(state),
		votes: getVotes(state),
		getMovieDetails: jest.fn(),
		resetMovieDetails: jest.fn(),
		onShowTrailor: jest.fn(),
		match: {
			params: {
				id: 'test'
			}
		},
		history: {
			push: jest.fn()
		},
		...setUpProps
	};
	const wrapper = container(<MovieDetails {...props} />);
	return { wrapper, props };
};

describe('MovieDetails', () => {
	it('should render details of movie', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
	it('should navigate to trailor page', () => {
		const { wrapper, props } = setUp();
		wrapper.find(RoundAction).simulate('click');
		expect(props.history.push).toBeCalledWith('/streams/movie/test');
	});
});
