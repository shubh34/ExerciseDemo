import { getRecommendedMovies, getFormattedRecomendedMovieDetails } from './selectors';

const state = {
	recomendations: {
		data: [
			{
				provider_id: 2,
				type: 'movies',
				id: 'pokemon-detective-pikachu',
				numerical_id: 101478,
				title: 'Pokémon: Detective Pikachu',
				display_name: 'Pokémon: Detective Pikachu',
				year: 2019,
				duration: 104,
				label: '4,99 €',
				short_plot:
					'Cuando el detective de talla mundial Harry Goodman desparece en circunstancias muy extrañas, su hijo ',
				images: {
					artwork: 'https://images-0.wuaki.tv/system/artworks/101478/master/pokemon-detective-pikachu-1564139688.jpeg',
					snapshot: 'https://images-2.wuaki.tv/system/shots/150638/original/pokemon-detective-pikachu-1564139541.jpeg',
					ribbons: [
						{
							type: 'ribbons',
							id: '6',
							numerical_id: 6,
							name: 'UHD',
							color: '#ffcc00',
							text_color: '#000000',
							position: 'top-left',
							localized_name: 'UHD',
							image: 'https://images-1.wuaki.tv/system/images/6/original/uhd-1418228576.png'
						}
					]
				},
				highlighted_score: {
					score: 6.9,
					amount_of_votes: 2471,
					formatted_amount_of_votes: '2,5K'
				},
				rating: {
					average: 4,
					scale: 5
				},
				classification: {
					type: 'classifications',
					id: '1',
					numerical_id: 1,
					name: 'T',
					age: 0,
					adult: false,
					description: 'Mostrar sólo contenidos autorizados para todos los públicos',
					default: false
				},
				labels: {
					audio_qualities: [
						{
							type: 'audio_qualities',
							id: '2.0',
							numerical_id: 2,
							name: '2.0 (Stereo)',
							abbr: '2.0',
							image: 'https://images-1.wuaki.tv/system/logos/2/original/2-0-stereo-1456155689.png'
						}
					],
					hdr_types: [
						{
							type: 'hdr_types',
							id: 'NONE',
							numerical_id: 1,
							name: 'SDR',
							abbr: 'NONE',
							image: null
						}
					],
					purchase_types: [
						{
							type: 'purchase_types',
							id: '1',
							numerical_id: 1,
							is_recurring: false,
							name: 'Alquiler 48H',
							label: 'ALQUILER 48H',
							kind: 'rental',
							expires_after_in_seconds: 172800,
							available_time_in_seconds: 172800
						}
					]
				}
			}
		]
	}
};
describe('Recomendation Selector', () => {
	it('should return getRecommendedMovies as empty', () => {
		expect(getRecommendedMovies({ recomendations: {} })).toMatchSnapshot();
	});
	it('should return recomended movies with details ', () => {
		expect(getRecommendedMovies(state)).toMatchSnapshot();
	});
	it('should return formated movies ', () => {
		expect(getFormattedRecomendedMovieDetails(state)).toMatchSnapshot();
	});
});
