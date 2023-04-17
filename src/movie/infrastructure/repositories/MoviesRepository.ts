import { apiKey, baseURL, imageBaseURL } from '../../../../config';
import { http } from '../http/http';
import { MovieDTO } from '../http/dto/MovieDTO';
import { Movie } from '@movie/domain/entities/Movie';

type IMapURL = {
	popular: string;
	topRated: string;
	upcoming: string;
	latest: string;
};

type IMapPaths = {
	image: (arg: string) => string;
	backdrop: (arg: string) => string;
	details: (arg: string) => string;
};

const mapURL: IMapURL = {
	popular: `${baseURL}/popular?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`,
	topRated: `${baseURL}/top_rated?api_key=${apiKey}&language=en-US`,
	upcoming: `${baseURL}/upcoming?api_key=${apiKey}&language=en-US`,
	latest: `${baseURL}/latest?api_key=${apiKey}&language=en-US`,
};

const mapPaths: IMapPaths = {
	image: (path: string) => `${imageBaseURL}/w440_and_h660_face${path}?api_key=${apiKey}`,
	backdrop: (path: string) => `${imageBaseURL}/original${path}?api_key=${apiKey}`,
	details: (movieId: string) => `${baseURL}/${movieId}?api_key=${apiKey}&language=en-US`,
};

export const getImagePath = (path: string): string => {
	const url = mapPaths.image(path);
	return url;
};

export const getBackdropPath = (path: string | null): string | null => {
	let url = null;
	if (path) {
		url = mapPaths.backdrop(path);
	}
	return url;
};

// export const getMovieDetails = async (movieId: string) => {
// 	const data = await http<>.get(mapURL.details(movieId)).then((res) => res.json());
// };

export const getMovies = async (kind: keyof IMapURL): Promise<Movie[]> => {
	try {
		const url: string = mapURL[kind];
		const movies = await http.get<MovieDTO[]>(url);
		const result: Movie[] = movies.map(
			({
				id,
				original_title,
				poster_path,
				backdrop_path,
				vote_average,
				overview,
				release_date,
				genre_ids,
			}) => ({
				key: String(id),
				title: original_title,
				poster: getImagePath(poster_path),
				backdrop: getBackdropPath(backdrop_path),
				rating: vote_average,
				description: overview,
				releaseDate: release_date,
				genres: genre_ids?.map(({ id: _id }) => String(_id)),
			})
		);
		return result;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
