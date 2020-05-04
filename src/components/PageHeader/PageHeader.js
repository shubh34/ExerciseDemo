import './PageHeader.scss';
import { Link } from 'react-router-dom';
import React from 'react';

import Logo from '../../sharedComponents/Logo/Logo';

const PageHeader = () => (
	<nav className='nav'>
		<Link to='/'>
			<Logo />
		</Link>
	</nav>
);

export default PageHeader;
