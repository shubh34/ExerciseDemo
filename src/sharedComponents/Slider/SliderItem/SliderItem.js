import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './SliderItem.scss';
import Scores from '../../Scores/Scores';

const SliderItem = React.forwardRef(({
	movie, id, score, votes,
}, ref) => (
	<div
		className={cx('slider-item')}
		ref={ref}
	>
		<Link className="slider-item-image" to={`/movies/${id}`}>
			<img width="100%" src={movie} alt="" />
		</Link>
		<Scores score={score} votes={votes} />
	</div>
));

export default SliderItem;
