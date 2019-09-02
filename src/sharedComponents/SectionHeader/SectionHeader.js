import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ header, className }) => <h2 className={className}>{header}</h2>;

SectionHeader.propTypes = {
	header: PropTypes.string.isRequired,
	className: PropTypes.string,
};
export default SectionHeader;
