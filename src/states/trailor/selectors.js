import get from 'lodash/get';

export const getMovieTrailorUrl = state => get(state, 'trailor.trailor.data.stream_infos[0].url');
