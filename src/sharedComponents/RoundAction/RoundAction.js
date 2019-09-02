import React from 'react';
import PropTypes from 'prop-types';
import './RoundAction.scss';

const RoundAction = (props) => {
	const { title = 'Trailer', onClick } = props;
	return (
		<div className="round-action">
			<button type="button" className="round-action_element" onClick={onClick} />
			<span className="round-action_title">{title}</span>
		</div>
	);
};

RoundAction.propTypes = {
	title: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};
export default RoundAction;
