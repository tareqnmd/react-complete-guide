import { useCallback, useEffect, useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	// function fetchMovies() {
	// 	setLoading(true);
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
	// 			setError('Something went wrong');
	// 			setMovies([]);
	// 		});
	// 	setLoading(false);
	// }

	const fetchMovies = useCallback(async () => {
		setLoading(true);
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
			setError('Something went wrong');
			setMovies([]);
		}
		setLoading(false);
	}, []);

	let content = 'No movies found';

	if (loading) {
		content = <div>Loading...</div>;
	} else if (error) {
		content = <div>{error}</div>;
	} else if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);

	return (
		<>
			<section>
				<button onClick={fetchMovies}>Fetch Movies</button>
			</section>
			<section>
				{/* {loading ? (
					'Loading ...'
				) : error ? (
					`${error}`
				) : movies.length > 0 ? (
					<MoviesList movies={movies} />
				) : (
					'No movies found'
				)} */}
				{content}
			</section>
		</>
	);
};

export default App;
