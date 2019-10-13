import get from 'lodash/get';
import { createSelector } from 'reselect';

const getMovieDetails = state => get(state, 'movieDetails', '');

export const getHighLightedScore = createSelector(getMovieDetails, movieDetails => get(movieDetails, 'data.scores', []).find(score => score.highlighted));

export const getMovieTitle = createSelector(getMovieDetails, movieDetails => get(movieDetails, 'data.title', ''));

export const getSnapshotImageUrl = createSelector(getMovieDetails, movieDetails => get(movieDetails, 'data.images.snapshot', '').replace('.jpeg', '-width1920-quality80.jpeg'));

export const getMovieDescription = createSelector(getMovieDetails, movieDetails => get(movieDetails, 'data.plot', ''));

export const getScore = createSelector(getMovieDetails, movieDetails => get(movieDetails, 'score', ''));

export const getVotes = createSelector(getMovieDetails, movieDetails => get(movieDetails, 'formatted_amount_of_votes', ''));
