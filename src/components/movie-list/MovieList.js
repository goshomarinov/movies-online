import { MovieCard } from "./movie-card/MovieCard";

export const MovieList = ({movies, type}) => {
    return (
        movies.map(movie => <MovieCard movie={movie} type={type} key={movie.id} />)
    );
}