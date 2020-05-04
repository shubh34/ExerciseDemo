import './RecomendedComponent.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchRecomendationForMovie } from '../../states/recomendations/action';
import Header from '../../sharedComponents/Header/Header';
import Slider from '../../sharedComponents/Slider/Slider';
import { getFormattedRecomendedMovieDetails } from '../../states/recomendations/selectors';
import SliderItem from '../../sharedComponents/Slider/SliderItem/SliderItem';

const mapStateToProps = state => ({
	recomendedMovies: getFormattedRecomendedMovieDetails(state)
});

const mapDispatch = dispatch => ({
	getRecomendedMovies: id => dispatch(fetchRecomendationForMovie(id))
});

export class RecomendedComponent extends Component {
	componentDidMount() {
		const { movieId, getRecomendedMovies } = this.props;
		getRecomendedMovies(movieId);
	}

	render() {
		const { recomendedMovies } = this.props;
		return (
			<div>
				<Header header='More movies you may like' />
				<Slider>
					{recomendedMovies.map(movie => (
						<SliderItem id={movie.id} score={movie.score} votes={movie.votes} movie={movie.artwork} />
					))}
				</Slider>
			</div>
		);
	}
}

RecomendedComponent.propTypes = {
	recomendedMovies: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired
		})
	).isRequired,
	getRecomendedMovies: PropTypes.func.isRequired,
	movieId: PropTypes.string.isRequired
};
export default connect(
	mapStateToProps,
	mapDispatch
)(RecomendedComponent);
