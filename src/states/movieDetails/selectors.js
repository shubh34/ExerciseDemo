import get from 'lodash/get';

const getMovieDetails = state => get(state, 'movieDetails.details');

export const getHighLightedScore = state => get(getMovieDetails(state), 'data.scores', []).find(score => score.highlighted);

export const getActors = state => get(getMovieDetails(state), 'data.actors');

export const getDirector = state => get(getMovieDetails(state), 'data.directors');

export const getMovieTitle = state => get(getMovieDetails(state), 'data.title');

export const getSnapshotImageUrl = state => get(getMovieDetails(state), 'data.images.snapshot', '').replace('.jpeg', '-width1920-quality80.jpeg');

export const getMovieDescription = state => get(getMovieDetails(state), 'data.plot');

export const getScore = state => get(getHighLightedScore(state), 'score');

export const getVotes = state => get(getHighLightedScore(state), 'formatted_amount_of_votes');
