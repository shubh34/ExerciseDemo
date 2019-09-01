import { combineReducers } from 'redux';
import movieListing from '../../states/movieListing/reducer';
import movieDetails from '../../states/movieDetails/reducer';
import trailor from '../../states/trailor/reducer';

export default combineReducers({
	movieListing, movieDetails, trailor,
});
