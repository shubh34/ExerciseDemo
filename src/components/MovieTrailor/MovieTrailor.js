/* eslint-disable jsx-a11y/media-has-caption */
import './MovieTrailor.scss';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovieTrailor } from '../../states/trailor/action';
import { getMovieTrailorUrl } from '../../states/trailor/selectors';
import BackButton from '../../sharedComponents/BackButton/BackButton';


const mapDispatch = dispatch => ({
	getMovieTrailor: id => dispatch(getMovieTrailor(id)),
});
const mapState = state => ({
	movieTrailorUrl: getMovieTrailorUrl(state),
});
const MovieTrailor = (props) => {
	const { getMovieTrailor, movieTrailorUrl, history, match: { params: { id: movieId = '' } } } = props;

	useEffect(() => {
		getMovieTrailor(movieId);
	}, movieId);
	const onVideoBack = () => history.goBack();
	return (
		<div className="movie-trailor">
			<BackButton title="Go details" onClick={onVideoBack} />
			<video width="100%" key={movieTrailorUrl} height="100%" controls autoPlay onEnded={onVideoBack}>
				<source src={movieTrailorUrl} type="video/mp4" />
			</video>
		</div>
	);
};

MovieTrailor.propTypes = {
	getMovieTrailor: PropTypes.func.isRequired,
	movieTrailorUrl: PropTypes.string.isRequired,
};

export default connect(mapState, mapDispatch)(MovieTrailor);
