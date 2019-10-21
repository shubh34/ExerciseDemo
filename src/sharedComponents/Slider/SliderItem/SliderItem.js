import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SliderItem.scss';
import Scores from '../../Scores/Scores';

const SliderItem = ({
	movie, id, score, votes
}) => (
	<div className='slider-item'>
		<Link className="slider-item-image" to={`/movies/${id}`}>
			<img width="100%" src={movie} alt="" />
		</Link>
		<Scores score={score} votes={votes} />
	</div>
);

SliderItem.propTypes = {
	movie: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	votes: PropTypes.string.isRequired
};

export default SliderItem;
