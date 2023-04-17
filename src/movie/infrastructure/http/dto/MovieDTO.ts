export type GenresDTO = {
	id: number;
	name: string;
};

export type MovieDTO = {
	page: number;
	id: number;
	original_title: string;
	poster_path: string;
	backdrop_path: string | null;
	vote_average: string;
	overview: string;
	release_date: string;
	genre_ids: GenresDTO[];
	adult: boolean;
	homepage: string;
	imdb_id: string;
	original_language: string;
	popularity: number;
	revenue: string;
	spoken_languages: [];
	video: boolean;
	budget: number;
};
