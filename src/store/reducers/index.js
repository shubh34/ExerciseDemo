import { combineReducers } from 'redux';
import movieListing from '../../states/movieListing/reducer';
import movieDetails from '../../states/movieDetails/reducer';
import trailer from '../../states/trailer/reducer';

export default combineReducers({
	movieListing, movieDetails, trailer,
});
