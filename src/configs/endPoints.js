export default {
	fetchMovieListByCategory: {
		url: 'lists/{categoryName}',
		method: 'GET',
		resolve(categoryName) {
			return this.url.replace('{categoryName}', categoryName);
		}
	},
	getMovieDetails: {
		url: 'movies/{movieName}',
		method: 'GET',
		resolve(movieName) {
			return this.url.replace('{movieName}', movieName);
		}
	},
	getMovieTrailer: {
		url: '/me/streamings',
		method: 'POST',
		resolve() {
			return this.url;
		}
	},
	getRecomendationForMovie: {
		url: 'recommendations/movies/{movieId}',
		method: 'GET',
		resolve(movieId) {
			return this.url.replace('{movieId}', movieId);
		}
	}
};
