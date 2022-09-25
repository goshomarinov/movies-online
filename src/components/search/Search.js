import searchStyle from '../search/Search.module.css';

import * as api from '../../services/moviesInfo';
import { useState } from 'react';
import { MovieCard } from '../movie-list/movie-card/MovieCard';

export const Search = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(Number);
    const [value, setValue] = useState({
        search: '',
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
        } = Object.fromEntries(new FormData(e.target));

        try {
            api.multiSearch(search)
                .then(movies => {
                    console.log(movies)
                    setPage(movies.page)
                    setMovies(movies.results);
                })
        } catch (err) {
            alert(err.message);
        }
    }

    const nextPage = () => {
        try {
            api.multiSearch(value.search, page + 1)
                .then(movies => {
                    setPage(movies.page)
                    setMovies(movies.results);
                })
        } catch (err) {
            alert(err.message)
        }
    }

    const previousPage = () => {
        try {
            api.multiSearch(value.search, page - 1)
                .then(movies => {
                    setPage(movies.page)
                    setMovies(movies.results);
                })
        } catch (err) {
            alert(err.message)
        }
    }
    return (

        <>
            <form onSubmit={onSubmit}>
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
                ? movies.map(movie => <MovieCard movie={movie} key={movie.id} />)
                : null
            }

            <div className={searchStyle['pagin-btns']}>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
        </>
    );
}