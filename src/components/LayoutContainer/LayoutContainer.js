import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovieListByCategory } from '../../states/movieListing/action';
import { movieCategeries } from '../../configs/config';
import { getMovieTrailor } from '../../states/trailor/action';
import { getMovieDetails } from '../../states/movieDetails/action';

const mapDispatch = dispatch => ({
	getMovieList: categoryName => dispatch(getMovieListByCategory(categoryName)),
	getMovieTrailor: id => dispatch(getMovieTrailor(id)),
	getMovieDetails: id => dispatch(getMovieDetails(id)),

});
class LayoutContainer extends Component {
	componentDidMount() {
		const { getMovieList, getMovieDetails, getMovieTrailor } = this.props;
		Object.keys(movieCategeries).forEach((id) => {
			getMovieList(movieCategeries[id]);
		});
		getMovieTrailor('rain-man');
		getMovieDetails('rain-man');
	}

	render() {
		return <div>Hello world </div>;
	}
}
LayoutContainer.propTypes = {
	getMovieList: Proptypes.func.isRequired,
	getMovieTrailor: Proptypes.func.isRequired,
	getMovieDetails: Proptypes.func.isRequired,
};
export default connect(null, mapDispatch)(LayoutContainer);
