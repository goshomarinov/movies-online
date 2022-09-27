import * as api from '../../services/moviesInfo';
import detailsStyle from '../details/Details.module.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SeasonCard } from '../movie-list/movie-card/SeasonCard';


export const TvShowDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [poster, setPoster] = useState();
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        try {
            api.getTvShowDetails(id)
                .then(movie => {
                    setMovie(movie)
                    api.getTvImgPath(movie.id)
                        .then(path => {
                            api.getMoviePoster(path.posters[0].file_path)
                                .then(img => {
                                    setPoster(img.url)
                                })
                        })
                })

        } catch (err) {
            alert(err.message);
        }
    }, [])

    useEffect(() => {
        api.getSeasons(id, movie.number_of_seasons)
        .then(res => {
            setSeasons(res);
        })
    },[movie.id])
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
                            <p>Seasons: {movie.number_of_seasons}</p>
                            <p>Overview: {movie.overview}</p>
                        </>
                        : null
                    }

                </div>
            </div>
            <>
                {seasons.map(s => <SeasonCard name={movie.name} seasonNum={s.season_number} poster={poster} />)}
            </>
        </>
    );
}