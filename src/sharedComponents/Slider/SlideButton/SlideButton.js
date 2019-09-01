import React from 'react';
import './SlideButton.scss';

const SlideButton = ({ onClick, type }) => {
	const arrowIcon = type === 'prev' ? 'icon__left-nav' : 'icon__right-nav';
	return (
		<button type="button" className={`slide-button slide-button--${type}`} onClick={onClick}>
			<span className={arrowIcon} />
		</button>
	);
};
export default SlideButton;
