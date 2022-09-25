import cardStyle from '../movie-card/MovieCard.module.css';

import { useEffect, useState } from "react";
import * as api from '../../../services/moviesInfo';

export const MovieCard = ({ movie }) => {
    const [poster, setPoster] = useState();

    useEffect(() => {
        try {
            api.getMovieImgPath(movie.id)
                .then(path => {
                    api.getMoviePoster(path.posters[0].file_path)
                        .then(img => {
                            setPoster(img.url)
                        })
                })
        } catch (err) {
            alert(err.message);
        }
    }, [movie.id])

    return (
        <div className={cardStyle['home-container']}>
            <div className={cardStyle['card-container']}>
                <img src={poster} />
                <h3>{movie.title}</h3>
            </div>
        </div>
    );
}