import React from 'react';
import PropTypes from 'prop-types';
import './RoundAction.scss';

const RoundAction = (props) => {
	const { element, title } = props;
	return (
		<div className="round-action">
			<button type="button" className="round-action_element"/>
			<span className="round-action_title">{title}</span>
		</div>
	);
};

RoundAction.propTypes = {
	title: PropTypes.string.isRequired,
	element: PropTypes.node.isRequired,
};
export default RoundAction;
