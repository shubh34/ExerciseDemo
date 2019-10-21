import get from 'lodash/get';
import { createSelector } from 'reselect';

export const getRecommendedMovies = state => get(state, 'recomendations.data', []);

export const getFormattedRecomendedMovieDetails = createSelector(
	getRecommendedMovies,
	movies => movies.map(movieDetails => ({
		id: movieDetails.id,
		artwork: movieDetails.images.artwork.replace('.jpeg', '-width217-quality80.jpeg'),
		score: movieDetails.highlighted_score.score,
		votes: movieDetails.highlighted_score.formatted_amount_of_votes
	}))
);
