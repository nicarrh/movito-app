import { useState, useCallback, useEffect } from "react";
import { getMovies } from "../repositories/MoviesRepository";
import { Movie } from "@app/movie/domain/entities/Movie";

export default function useMovies() {
	const [isLoading, setIsLoading] = useState(false);
	const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
	const [latestMovies, setLatestMovies] = useState<Movie[]>([]);
	const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
	const [error, setError] = useState({ error: false, message: "" });

	const getPopularMovies = useCallback(async () => {
		try {
			setIsLoading(true);
			const movies = await getMovies("popular");
			setPopularMovies(movies);
		} catch (err) {
			setError({ error: true, message: "An Error ocurred fetching movies" });
		} finally {
			setIsLoading(false);
		}
	}, []);

	const getLatestMovies = useCallback(async () => {
		console.log("latest");
		try {
			setIsLoading(true);
			const movies = await getMovies("latest");
			console.log("movies", movies);
			setLatestMovies(movies);
		} catch (err) {
			console.log("err", err);
			setError({ error: true, message: "An Error ocurred fetching movies" });
		} finally {
			setIsLoading(false);
		}
	}, []);

	const getTopRatedMovies = useCallback(async () => {
		console.log("topRated");
		try {
			setIsLoading(true);
			const movies = await getMovies("topRated");
			setTopRatedMovies(movies);
		} catch (err) {
			console.log("err", err);
			setError({ error: true, message: "An Error ocurred fetching movies" });
		} finally {
			setIsLoading(false);
		}
	}, []);

	// useEffect(() => {
	// 	getLatestMovies();
	// }, [getLatestMovies]);

	useEffect(() => {
		getPopularMovies();
	}, [getPopularMovies]);

	useEffect(() => {
		getTopRatedMovies();
	}, [getTopRatedMovies]);

	return {
		latestMovies,
		popularMovies,
		topRatedMovies,
		isLoading,
		error,
	};
}
