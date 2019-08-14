import { GO_TO_PAGE } from './action';

export const initailPage = {
	name: 'Home',
	backPage: 'Home',
};

const reducer = (state = initailPage, action) => {
	switch (action.type) {
	case GO_TO_PAGE:
		return {
			...state,
			name: action.name,
		};
	default:
		return state;
	}
};
export default reducer;
