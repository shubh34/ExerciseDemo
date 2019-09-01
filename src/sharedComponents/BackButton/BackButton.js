/* eslint-disable max-len */
import './BackButton.scss';
import React from 'react';
import PropTypes from 'prop-types';

const BackButton = ({ onClick, title = 'Back' }) => (
	<div className="back-button">
		<button type="button" name="go back" onClick={onClick}>{title}</button>
	</div>

);
BackButton.propTypes = {
	onClick: PropTypes.string.isRequired,
	title: PropTypes.string,
};

export default BackButton;
