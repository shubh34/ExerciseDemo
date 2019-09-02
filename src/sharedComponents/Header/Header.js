import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ header, className }) => <h1 className={className}>{header}</h1>;

Header.propTypes = {
	header: PropTypes.string.isRequired,
	className: PropTypes.string,
};
export default Header;
