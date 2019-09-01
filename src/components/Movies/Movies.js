import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMovieListByCategory } from '../../states/movieListing/action';
import SectionHeader from '../../sharedComponents/SectionHeader/SectionHeader';
import Slider from '../../sharedComponents/Slider/Slider';
import SliderItem from '../../sharedComponents/Slider/SliderItem/SliderItem';
import { getMovieListHeader, getMovieListByCategory } from '../../states/movieListing/selectors';


const mapDispatch = dispatch => ({
	fetchMovieList: id => dispatch(fetchMovieListByCategory(id)),
});
const mapState = (state, props) => ({
	movieCategoryHeader: getMovieListHeader(state, props.id),
	movieList: getMovieListByCategory(state, props.id),
});
const Movies = (props) => {
	const {
		id, fetchMovieList, movieCategoryHeader, movieList,
	} = props;
	useEffect(() => {
		fetchMovieList(id);
	}, [id]);
	return (
		<div className="movies">
			<SectionHeader header={movieCategoryHeader} />
			<Slider>
				{movieList.map(
					({
						artwork, score, id, votes,
					}, index) => (
						<SliderItem movie={artwork} score={score} id={id} votes={votes} key={index} ref={React.createRef()} />
					),
				)}
			</Slider>
		</div>
	);
};

export default connect(mapState, mapDispatch)(Movies);
