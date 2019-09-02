/* eslint-disable jsx-a11y/media-has-caption */
import './MovieTrailer.scss';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovieTrailer } from '../../states/trailer/action';
import { getMovieTrailerUrl } from '../../states/trailer/selectors';
import BackButton from '../../sharedComponents/BackButton/BackButton';


const mapDispatch = dispatch => ({
	getMovieTrailer: id => dispatch(getMovieTrailer(id)),
});
const mapState = state => ({
	movieTrailerUrl: getMovieTrailerUrl(state),
});
export const MovieTrailer = (props) => {
	const {
		getMovieTrailer, movieTrailerUrl, history, match: { params: { id: movieId = '' } },
	} = props;

	useEffect(() => {
		getMovieTrailer(movieId);
	}, movieId);
	const onVideoBack = () => history.goBack();
	return (
		<div className="movie-trailer">
			<BackButton title="Go details" onClick={onVideoBack} />
			<video width="100%" key={movieTrailerUrl} height="100%" controls autoPlay onEnded={onVideoBack}>
				<source src={movieTrailerUrl} type="video/mp4" />
			</video>
		</div>
	);
};

MovieTrailer.propTypes = {
	getMovieTrailer: PropTypes.func.isRequired,
	movieTrailerUrl: PropTypes.string,
	history: PropTypes.shape({
		goBack: PropTypes.func.isRequired,
	}),
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}).isRequired,
	}),
};

export default connect(mapState, mapDispatch)(MovieTrailer);
