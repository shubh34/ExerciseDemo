import './Home.scss';
import React, { useEffect, Fragment, lazy, Suspense } from 'react';
import { movieCategeries } from '../../configs/config';
import content from './Home.content';
import PageHeader from '../PageHeader/PageHeader';

const Movies = lazy(() => import('../Movies/Movies'));


const Home = () => {
	useEffect(() => {
		document.title = content.documentTitle;
	});
	return (
		<Fragment>
			<Suspense fallback={<div>Loading...</div>}>
				<PageHeader />
				<div className='movie-listing'>
					{Object.keys(movieCategeries).map(id => (
						<Movies id={movieCategeries[id]} key={id} />
					))}
				</div>
			</Suspense>
		</Fragment>
	);
};
export default React.memo(Home);
