import get from 'lodash/get';

export const getMovieTrailerUrl = state => get(state, 'trailer.data.stream_infos[0].url');
