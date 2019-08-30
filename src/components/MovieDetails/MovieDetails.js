import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MovieDetailsHero } from './MovieDetailsHero/MovieDetailsHero';
import { getSnapshotImageUrl } from '../../states/movieDetails/selectors';

const mapStateToProps = state => ({
	snapShotUrl: getSnapshotImageUrl(state),
	test: '1',
});

const MovieDetails = (props) => {
	const { snapShotUrl } = props;
	return (
		<div className="movie-details">
			<MovieDetailsHero heroUrl={snapShotUrl}> Test </MovieDetailsHero>
		</div>
	);
};

MovieDetails.propTypes = {
	snapShotUrl: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(MovieDetails);
