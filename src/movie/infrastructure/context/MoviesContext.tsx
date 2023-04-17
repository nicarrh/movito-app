import React, { ReactNode, createContext, useMemo } from "react";

import useMovie from "../hooks/useMovies";
import { Movie } from "@app/movie/domain/entities/Movie";

type ContextType = {
	popularMovies: Movie[];
	latestMovies: Movie[];
	isLoading: boolean;
};

const MoviesContext = createContext({} as ContextType);

const MoviesProvider = ({ children }: { children: ReactNode }) => {
	const { latestMovies, isLoading, popularMovies } = useMovie();
	const value = useMemo(
		() => ({
			latestMovies,
			isLoading,
			popularMovies,
		}),
		[latestMovies, isLoading, popularMovies]
	);
	return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

export { MoviesContext, MoviesProvider };
