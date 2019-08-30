import get from 'lodash/get';

const getMovieDetails = state => get(state, 'movieDetails.details');

export const getActors = state => get(getMovieDetails(state), 'data.actors');

export const getDirector = state => get(getMovieDetails(state), 'data.directors');

export const getMovieTitle = state => get(getMovieDetails(state), 'data.title');

export const getSnapshotImageUrl = state => get(getMovieDetails(state), 'data.images.snapshot');
