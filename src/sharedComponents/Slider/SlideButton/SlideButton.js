import React from 'react';
import PropTypes from 'prop-types';
import './SlideButton.scss';

const SlideButton = ({ onClick, type }) => {
	const arrowIcon = type === 'prev' ? 'icon__left-nav' : 'icon__right-nav';
	return (
		<button type="button" className={`slide-button slide-button--${type}`} onClick={onClick}>
			<span className={arrowIcon} />
		</button>
	);
};
SlideButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired
};
export default SlideButton;
