import './MovieDetailsHero.scss';
import React from 'react';
import PropTypes from 'prop-types';


export const MovieDetailsHero = (props) => {
	const { heroUrl, children } = props;
	const style = {
		backgroundImage: `url(${heroUrl})`
	};
	return (
		<div className="movie-details_hero" style={style}>
			{children}
		</div>
	);
};

export default React.memo(MovieDetailsHero);

MovieDetailsHero.propTypes = {
	heroUrl: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired
};
