import get from 'lodash/get';

export const getMovieListHeader = (state, id) => get(state, `movieListing[${id}].data.name`);

export const getMovieListByCategory = (state, id) => get(state, `movieListing[${id}].data.contents.data`, []).map(movie => ({
	artwork: movie.images.artwork.replace('.jpeg', '-width217-quality80.jpeg'),
	id: movie.id,
	score: movie.highlighted_score.score,
	votes: movie.highlighted_score.formatted_amount_of_votes,
}));
