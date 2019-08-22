import React from 'react';

import RoundAction from '../sharedComponents/RoundAction/RoundAction';

export const MovieDetailsHero = (props) => {
	const style = {
		backgroundImage: "url('https://images-1.wuaki.tv/system/artworks/79/master/matrix-1558427169.jpeg')",
		height: '600px',
	};
	return (
		<div style={style}>
Hello Div
			{props.children}
		</div>
	);
};

const MovieDetails = () => <MovieDetailsHero img="https://images-1.wuaki.tv/system/artworks/79/master/matrix-1558427169.jpeg"><div><RoundAction title="test" /></div></MovieDetailsHero>;

export default MovieDetails;
