import cardStyle from '../movie-card/MovieCard.module.css';

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import * as api from '../../../services/moviesInfo';

export const MovieCard = ({ movie, type }) => {
    const [poster, setPoster] = useState();
    useEffect(() => {
        try {
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
            
        } catch (err) {
            alert(err.message);
        }
    }, [movie.id])

    return (
        <div className={cardStyle['home-container']}>
            <div className={cardStyle['card-container']}>
                <Link to={`/details/${movie.id}/${type}`}><img src={poster} alt='picture'/></Link>
                <h3>{movie.title || movie.name}</h3>
            </div>
        </div>
    );
}