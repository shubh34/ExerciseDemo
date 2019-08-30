import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import configureStore from '../../store';
import Home from '../Home/Home';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieTrailor from '../MovieTrailor/MovieTrailor';


const store = configureStore();

// const movies = [
// 	{
// 	  id: 1,
// 	  image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 	  imageBg: '/images/slide1b.webp',
// 	  title: '1983',
// 	},
// 	{
// 	  id: 2,
// 	  image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 	  imageBg: '/images/slide2b.webp',
// 	  title: 'Russian doll',
// 	},
// 	{
// 	  id: 3,
// 	  image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 	  imageBg: '/images/slide3b.webp',
// 	  title: 'The rain',
// 	},
// 	{
// 	  id: 4,
// 	  image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 	  imageBg: '/images/slide4b.webp',
// 	  title: 'Sex education',
// 	},
// 	{
// 	  id: 5,
// 	  image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 	  imageBg: '/images/slide5b.webp',
// 	  title: 'Elite',
// 	},
// 	{
// 	  id: 6,
// 	  image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 	  imageBg: '/images/slide6b.webp',
// 	  title: 'Black mirror',
// 	},
// 	{
// 		id: 7,
// 		image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		imageBg: '/images/slide6b.webp',
// 		title: 'Black mirror',
// 	  },
// 	  {
// 		id: 8,
// 		image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		imageBg: '/images/slide6b.webp',
// 		title: 'Black mirror',
// 	  },
// 	  {
// 		id: 9,
// 		image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		imageBg: '/images/slide6b.webp',
// 		title: 'Black mirror',
// 	  }, {
// 		id: 1,
// 		image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		imageBg: '/images/slide1b.webp',
// 		title: '1983',
// 	  },
// 	  {
// 		id: 2,
// 		image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		imageBg: '/images/slide2b.webp',
// 		title: 'Russian doll',
// 	  },
// 	  {
// 		id: 3,
// 		image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		imageBg: '/images/slide3b.webp',
// 		title: 'The rain',
// 	  },
// 	  {
// 		id: 4,
// 		image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		imageBg: '/images/slide4b.webp',
// 		title: 'Sex education',
// 	  },
// 	  {
// 		id: 5,
// 		image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		imageBg: '/images/slide5b.webp',
// 		title: 'Elite',
// 	  },
// 	  {
// 		id: 6,
// 		image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		imageBg: '/images/slide6b.webp',
// 		title: 'Black mirror',
// 	  },
// 	  {
// 		  id: 7,
// 		  image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		  imageBg: '/images/slide6b.webp',
// 		  title: 'Black mirror',
// 	},
// 	{
// 		  id: 8,
// 		  image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		  imageBg: '/images/slide6b.webp',
// 		  title: 'Black mirror',
// 	},
// 	{
// 		  id: 9,
// 		  image: 'https://images-0.wuaki.tv/system/artworks/86470/master/dumbo-2019-1561641922-width217-quality80.jpeg',
// 		  imageBg: '/images/slide6b.webp',
// 		  title: 'Black mirror',
// 	},
// ];
// 	<Router>
// 	<div className='App'>
// 		<PageHeader />
// 		<div className='page_container'>
// 				<Switch>
// 				<Route exact path='/' component={BlogsListing} />
// 				<Route path='/addBlog' component={CreateBlog} />
// 				<Route exact path='/viewBlog/:id' component={ViewBlog} />
// 				<Route component={BlogsListing} />
// 			</Switch>
//    </div>
// 	</div>
// </Router>;

const App = () => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/movies' component={MovieDetails} />
				<Route exact path='/streams/movie/:id' component={MovieTrailor} />
				<Route component={Home} />
			</Switch>
		</Router>
	</Provider>
);

export default App;


// { /* <div className="app">
// 					<Slider>
// 						{movies.map((movie, index) => (
// 							<SliderItem movie={movie} key={index} ref={React.createRef()} />
// 						))}
// 					</Slider>
// 					<Slider>
// 						{movies.map((movie, index) => (
// 							<SliderItem movie={movie} key={index} ref={React.createRef()} />
// 						))}
// 					</Slider>
// 					<Slider>
// 						{movies.map((movie, index) => (
// 							<SliderItem movie={movie} key={index} ref={React.createRef()} />
// 						))}
// 					</Slider>
// 				</div> */ }
