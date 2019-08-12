import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovieListByCategory, getMovieTrailor, getMovieDetails } from '../../states/movieListing/action';
import { movieCategeries } from '../../configs/config';

const mapDispatch = dispatch => ({
	getMovieList: categoryName => dispatch(getMovieListByCategory(categoryName)),
	getMovieTrailor: () => dispatch(getMovieTrailor()),
	getMovieDetails: () => dispatch(getMovieDetails()),

});
class LayoutContainer extends Component {
	componentDidMount() {
		const { getMovieList } = this.props;
		Object.keys(movieCategeries).forEach((id) => {
			getMovieList(movieCategeries[id]);
		});
		// getMovieTrailor();
		getMovieDetails('rain-man');
	}

	render() {
		return <div>Hello world </div>;
	}
}
LayoutContainer.propTypes = {
	getMovieList: Proptypes.func.isRequired,
	// getMovieTrailor: Proptypes.func.isRequired,
	// getMovieDetails: Proptypes.func.isRequired,
};
export default connect(null, mapDispatch)(LayoutContainer);
