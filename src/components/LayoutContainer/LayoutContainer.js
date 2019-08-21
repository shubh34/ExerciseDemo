import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovieListByCategory } from '../../states/movieListing/action';
import { movieCategeries } from '../../configs/config';
import { getMovieTrailor } from '../../states/trailor/action';
import { getMovieDetails } from '../../states/movieDetails/action';
import { getCurrentPage, getBackPage } from '../../states/page/selectors';
import { goToPage } from '../../states/page/action';
import Home from '../Home/Home';
import MovieDetails from '../MovieDetails/MovieDetails';

const mapDispatch = dispatch => ({
	getMovieList: categoryName => dispatch(getMovieListByCategory(categoryName)),
	getMovieTrailor: id => dispatch(getMovieTrailor(id)),
	getMovieDetails: id => dispatch(getMovieDetails(id)),
	goToPage: name => goToPage(name),

});

const mapState = state => ({
	page: getCurrentPage(state),
	backPage: getBackPage(state),
});
class LayoutContainer extends Component {
	componentDidMount() {
		const { getMovieList, getMovieDetails, getMovieTrailor } = this.props;
		Object.keys(movieCategeries).forEach((id) => {
			getMovieList(movieCategeries[id]);
		});
		getMovieTrailor('rain-man');
		getMovieDetails('rain-man');
		this.handleBack = this.handleBack.bind(this);
	}

	handleBack() {
		const { goToPage, backPage } = this.props;
		goToPage(backPage);
	}

	render() {
		const { page = 'MovieDetails' } = this.props;
		switch (page) {
		case 'Home':
			return <Home handleBack={this.handleBack} />;
		case 'MovieDetails':
			return <MovieDetails handleBack={this.handleBack} />;
		case 'MovieTrailor':
			return <MovieDetails handleBack={this.handleBack} />;
		default:
			return null;
		}
	}
}
LayoutContainer.propTypes = {
	getMovieList: Proptypes.func.isRequired,
	getMovieTrailor: Proptypes.func.isRequired,
	getMovieDetails: Proptypes.func.isRequired,
	page: Proptypes.string.isRequired,
	goToPage: Proptypes.func.isRequired,
	backPage: Proptypes.string.isRequired,
};
export default connect(mapState, mapDispatch)(LayoutContainer);
