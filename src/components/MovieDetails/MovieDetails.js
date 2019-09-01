import './MovieDetails.scss';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MovieDetailsHero } from './MovieDetailsHero/MovieDetailsHero';
import {
	getSnapshotImageUrl, getMovieTitle, getMovieDescription, getScore, getVotes,
} from '../../states/movieDetails/selectors';
import { getMovieDetails, resetMovieDetails } from '../../states/movieDetails/action';
import { getMovieTrailer } from '../../states/trailer/action';
import PageHeader from '../PageHeader/PageHeader';
import Scores from '../../sharedComponents/Scores/Scores';
import RoundAction from '../../sharedComponents/RoundAction/RoundAction';
import SectionHeader from '../../sharedComponents/SectionHeader/SectionHeader';
import Header from '../../sharedComponents/Header/Header';

const mapStateToProps = state => ({
	snapShotUrl: getSnapshotImageUrl(state),
	movieTitle: getMovieTitle(state),
	movieDescription: getMovieDescription(state),
	score: getScore(state),
	votes: getVotes(state),
});

const mapDispatch = dispatch => ({
	getMovieDetails: id => dispatch(getMovieDetails(id)),
	resetMovieDetails: () => dispatch(resetMovieDetails()),
	onShowTrailor: id => dispatch(getMovieTrailer(id)),

});


export const MovieDetails = (props) => {
	const {
		score, votes, snapShotUrl, movieTitle, movieDescription, getMovieDetails, resetMovieDetails, match: { params: { id: movieId = '' } },
	} = props;

	useEffect(() => {
		getMovieDetails(movieId);
		return () => resetMovieDetails();
	}, [movieId]);
	useEffect(() => {
		if (movieTitle) {
			document.title = `${movieTitle}- Rakuten TV`;
		}
	}, [movieTitle]);

	const onShowTrailor = () => {
		props.history.push(`/streams/movie/${movieId}`);
	};

	return (
		<div>
			<PageHeader />
			<div className="movie-details">
				<MovieDetailsHero heroUrl={snapShotUrl} onClick={onShowTrailor}>
					<div className="movie-info">
						<div className="details_actions">
							<RoundAction onClick={onShowTrailor} />
						</div>
						<div className="details_meta">
							<Scores score={score} votes={votes} className="movie-details-score" />
							<Header header={movieTitle} className="details_meta_title" />
						</div>
					</div>
				</MovieDetailsHero>
				<div className="movie-details-description">
					<SectionHeader header="Descripción :" />
					<p>{movieDescription}</p>
				</div>
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	score: PropTypes.number.isRequired,
	votes: PropTypes.string.isRequired,
	snapShotUrl: PropTypes.string.isRequired,
	movieDescription: PropTypes.string.isRequired,
	movieTitle: PropTypes.string.isRequired,
	getMovieDetails: PropTypes.func.isRequired,
	resetMovieDetails: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}),
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}).isRequired,
	}),
};
export default connect(mapStateToProps, mapDispatch)(MovieDetails);
