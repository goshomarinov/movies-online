import * as api from '../../services/moviesInfo';
import tvShowsStyle from '../tv-shows/TvShows.module.css';
import { useEffect, useState } from "react";
import { MovieCard } from "../movie-list/movie-card/MovieCard";

export const TvShows = () => {
    const [tvShows, setTvShows] = useState([]);
    const [type, setType] = useState('');
    const [page, setPage] = useState(Number);


    useEffect(() => {
        try {
            api.getPopularTvShows()
                .then(movies => {
                    console.log(movies)
                    setPage(movies.page)
                    setTvShows(movies.results);
                    setType('tvShows')
                })

        } catch (err) {
            alert(err.message);
        }
    },[])

    const nextPage = () => {
        try {
            api.getPopularTvShows(page + 1)
                .then(movies => {
                    setPage(movies.page)
                    setTvShows(movies.results);
                })

        } catch (err) {
            alert(err.message)
        }
    }

    const previousPage = () => {
        try {
            api.getPopularTvShows(page - 1)
                .then(movies => {
                    setPage(movies.page)
                    setTvShows(movies.results);
                })

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <>
            {tvShows.map(movie => <MovieCard movie={movie} type={type} key={movie.id} />)}

            <div className={tvShowsStyle['pagin-btns']}>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
        </>
    );
};