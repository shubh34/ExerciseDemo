import { combineReducers } from 'redux';
import movieListing from '../../states/movieListing/reducer';
import movieDetails from '../../states/movieDetails/reducer';
import trailor from '../../states/trailor/reducer';
import page from '../../states/page/reducer';

export default combineReducers({
	page, movieListing, movieDetails, trailor,
});
