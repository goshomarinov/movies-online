import * as api from '../../services/moviesInfo';
import detailsStyle from '../details/Details.module.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export const Details = () => {
    const { id, type } = useParams();
    const [movie, setMovie] = useState({});
    const [poster, setPoster] = useState();

    console.log(movie)
    useEffect(() => {
        try {
            api.getDetails(id, type)
                .then(movie => {
                    setMovie(movie);
                    if (type == 'movies') {
                        api.getMovieImgPath(movie.id)
                            .then(path => {
                                api.getMoviePoster(path.posters[0].file_path)
                                    .then(img => {
                                        setPoster(img.url)
                                    })
                            })
                    } else {
                        api.getTvImgPath(movie.id)
                            .then(path => {
                                api.getMoviePoster(path.posters[0].file_path)
                                    .then(img => {
                                        setPoster(img.url)
                                    })
                            })
                    }
                })
        } catch (err) {
            alert(err.message);
        }
    }, [])
    return (
        <>
            <div className={detailsStyle['container']}>
                <img className={detailsStyle['det-img']} src={poster} />
                <div>
                    {movie
                        ? <>
                            <p>Title: {movie.title || movie.name}</p>
                            <p>Status: {movie.status}</p>
                            <p>Release Date: {movie.first_air_date || movie.release_date}</p>
                            <p>Popularity: {movie.popularity}</p>
                            <p>Overview: {movie.overview}</p>
                        </>
                        : null
                    }

                </div>
            </div>
            <Link className={detailsStyle['btn']}>Watch Online</Link>
        </>
    );
}