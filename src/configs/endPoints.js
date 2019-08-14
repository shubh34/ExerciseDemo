export default {
	getMovieListByCategory: {
		url: 'lists/{categoryName}',
		method: 'GET',
		resolve(categoryName) {
			return this.url.replace('{categoryName}', categoryName);
		},
	},
	getMovieDetails: {
		url: 'movies/{movieName}',
		method: 'GET',
		resolve(movieName) {
			return this.url.replace('{movieName}', movieName);
		},
	},
	getMovieTrailer: {
		url: '/me/streamings',
		method: 'POST',
		resolve() {
			return this.url;
		},
	},
};
