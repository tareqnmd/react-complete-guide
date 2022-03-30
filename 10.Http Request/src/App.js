import { useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';

const App = () => {
	const [movies, setMovies] = useState([]);

	// function fetchMovies() {
	// 	fetch('https://swapi.dev/api/films')
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			const transformedMovies = data.results.map((movie) => {
	// 				return {
	// 					id: movie.episode_id,
	// 					title: movie.title,
	// 					openingText: movie.opening_crawl,
	// 					releaseDate: movie.release_date,
	// 				};
	// 			});
	// 			setMovies(transformedMovies);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	//          setMovies([]);
	// 		});
	// }

	async function fetchMovies() {
		const response = await fetch('https://swapi.dev/api/films');
		try {
			const data = await response.json();

			const transformedMovies = data.results.map((movie) => {
				return {
					id: movie.episode_id,
					title: movie.title,
					openingText: movie.opening_crawl,
					releaseDate: movie.release_date,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			console.log(error);
			setMovies([]);
		}
	}

	return (
		<>
			<section>
				<button onClick={fetchMovies}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</>
	);
};

export default App;
