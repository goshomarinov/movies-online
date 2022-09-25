import * as api from '../../services/moviesInfo';
import { useEffect, useState } from "react";
import { MovieList } from '../movie-list/MovieList';

import buttonsStyle from '../home-page/Home.module.css';

export const Home = () => {
    const [topRated, setTopRated] = useState([]);
    const [page, setPage] = useState(Number);

    useEffect(() => {
        try {
            api.getTopRated()
                .then(movies => {
                    console.log(movies)
                    setPage(movies.page)
                    setTopRated(movies.results);
                })
        } catch (err) {
            alert(err.message)
        }
    }, [])

    const nextPage = () => {
        try {
            api.getTopRated(page + 1)
                .then(movies => {
                    setPage(movies.page)
                    setTopRated(movies.results);
                })
        } catch (err) {
            alert(err.message)
        }
    }

    const previousPage = () => {
        try {
            api.getTopRated(page - 1)
                .then(movies => {
                    setPage(movies.page)
                    setTopRated(movies.results);
                })
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <>
            <MovieList movies={topRated} />
            <div className={buttonsStyle['buttons']}>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
        </>
    );
}