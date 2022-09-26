import searchStyle from '../search/Search.module.css';

import * as api from '../../services/moviesInfo';
import { useState } from 'react';
import { MovieCard } from '../movie-list/movie-card/MovieCard';

export const Search = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(Number);
    const [value, setValue] = useState({
        search: '',
        tvOrMovie: 'movies',
    });

    const changeHandler = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            search,
            tvOrMovie,
        } = Object.fromEntries(new FormData(e.target));

        try {

            if (tvOrMovie == 'movies') {
                api.movieSearch(search)
                    .then(movies => {
                        setPage(movies.page)
                        setMovies(movies.results);
                    })
            } else {
                api.tvSearch(search)
                    .then(movies => {
                        setPage(movies.page)
                        setMovies(movies.results);
                    })
            }
        } catch (err) {
            alert(err.message);
        }
    }

    const nextPage = () => {
        try {
            if (value.tvOrMovie == 'movies') {
                api.movieSearch(value.search, page + 1)
                    .then(movies => {
                        setPage(movies.page)
                        setMovies(movies.results);
                    })
            } else {
                api.tvSearch(value.search, page + 1)
                    .then(movies => {
                        setPage(movies.page)
                        setMovies(movies.results);
                    })
            }
        } catch (err) {
            alert(err.message)
        }
    }

    const previousPage = () => {
        try {
            if (value.tvOrMovie == 'movies') {
                api.movieSearch(value.search, page - 1)
                    .then(movies => {
                        setPage(movies.page)
                        setMovies(movies.results);
                    })
            } else {
                api.tvSearch(value.search, page - 1)
                    .then(movies => {
                        setPage(movies.page)
                        setMovies(movies.results);
                    })
            }
        } catch (err) {
            alert(err.message)
        }
    }


    return (

        <>
            <form onSubmit={onSubmit}>
                <select onChange={changeHandler} name="tvOrMovie">
                    <option value="movies">Movies</option>
                    <option value="tvShows">TV Shows</option>
                </select>
                <input className={searchStyle['form-input']}
                    type='text'
                    name='search'
                    placeholder='Search'
                    value={value.search}
                    onChange={changeHandler}
                />
                <input className={searchStyle['form-button']} type='submit' value='Search' />
            </form>

            {movies.length > 0
                ? movies.map(movie => <MovieCard movie={movie} type={value.tvOrMovie} key={movie.id} />)
                : null
            }

            <div className={searchStyle['pagin-btns']}>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
        </>
    );
}