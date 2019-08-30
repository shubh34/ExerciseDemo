import React from 'react';
import './MovieDetailsHero.scss';
import PropTypes from 'prop-types';
import RoundAction from '../../sharedComponents/RoundAction/RoundAction';


export const MovieDetailsHero = (props) => {
	const { heroUrl, children } = props;
	const style = {
		backgroundImage: `url(${'https://images-0.wuaki.tv/system/shots/13010/original/the-rainmaker.20140731142845-width1920-quality80.jpg'})`,
		height: '600px',
	};
	return (
		<div className="movie-details_hero" style={style}>
			{children}
			<RoundAction />
		</div>
	);
};

MovieDetailsHero.propTypes = {
	heroUrl: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};
