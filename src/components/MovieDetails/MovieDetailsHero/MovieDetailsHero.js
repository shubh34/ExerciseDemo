import React from 'react';
import './MovieDetailsHero.scss';
import PropTypes from 'prop-types';


export const MovieDetailsHero = (props) => {
	const { heroUrl, children } = props;
	const style = {
		backgroundImage: `url(${heroUrl})`,
	};
	return (
		<div className="movie-details_hero" style={style}>
			{children}
		</div>
	);
};

MovieDetailsHero.propTypes = {
	heroUrl: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};
