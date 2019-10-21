export const cacheApiResponse = response => {
	const { meta: { cacheKey = '' } = {}, payload } = response;
	if (!sessionStorage.getItem(cacheKey)) {
		const responseToBeCached = {
			response: payload,
		};
		sessionStorage.setItem(cacheKey, JSON.stringify(responseToBeCached));
	}
};
