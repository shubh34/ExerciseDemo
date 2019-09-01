import './Home.scss';
import React, { useEffect } from 'react';
import { movieCategeries } from '../../configs/config';
import content from './Home.content';
import Movies from '../Movies/Movies';
import PageHeader from '../PageHeader/PageHeader';

const Home = () => {
	useEffect(() => {
		document.title = content.documentTitle;
	});
	return (
		<div>
			<PageHeader />
			<div className="movie-listing">
				{Object.keys(movieCategeries).map(id => <Movies id={movieCategeries[id]} key={id} />)}
			</div>
		</div>
	);
};
export default Home;
