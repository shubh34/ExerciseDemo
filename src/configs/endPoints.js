const apiBaseUrl = 'https://gizmo.rakuten.tv/v3/';

export const appendApiBaseUrl = url => apiBaseUrl + url;
export default {
	getMovieListByCategory: {
		uri: 'lists/{categoryName}',
		method: 'GET',
		resolve(categoryName) {
			return `${appendApiBaseUrl(this.uri.replace('{categoryName}', categoryName))}?classification_id=5&device_identifier=web&locale=es&market_code=es`;
		},
	},
	getMovieDetails: {
		uri: 'movies/{movieName}',
		method: 'GET',
		resolve(movieName) {
			return appendApiBaseUrl(this.uri.replace('{movieName}', movieName));
		},
	},
	getMovieTrailer: {
		uri: '/me/streamings',
		method: 'POST',
		resolve() {
			return appendApiBaseUrl(this.url);
		},
	},
};
