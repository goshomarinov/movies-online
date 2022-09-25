import { MovieCard } from "./movie-card/MovieCard";

export const MovieList = ({movies}) => {
    return (
        movies.map(movie => <MovieCard movie={movie} key={movie.id} />)
    );
}