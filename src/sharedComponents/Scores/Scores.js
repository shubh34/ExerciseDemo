import './Scores.scss';
import React from 'react';
import PropTypes from 'prop-types';


const Scores = (props) => {
	const { score, votes, className } = props;
	return (
		<div className="score">
			<span className={`score_rate ${className}`}>
				<span className="icon__rate">{score}</span>
			</span>
			<span className={`score_counter ${className}`}>
				<span className="icon__profile">{votes}</span>
			</span>
		</div>
	);
};

Scores.propTypes = {
	score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	votes: PropTypes.string.isRequired,
	className: PropTypes.string,
};
export default Scores;
