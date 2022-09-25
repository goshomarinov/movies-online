import * as api from '../../services/moviesInfo';
import { useEffect, useState } from "react";
import { MovieList } from '../movie-list/MovieList';

export const Home = () => {
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        try {
            api.getTopRated()
            .then(movies => {
                setTopRated(movies.results);
            })
        } catch (err) {
            alert(err.message)
        }
    },[])

    return (
        <MovieList movies={topRated} />
    );
}