import * as api from '../../services/moviesInfo';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Details = () => {
    const {id, type} = useParams();
    const [movie, setMovie] = useState({});
    const [poster, setPoster] = useState();

    
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
    },[])

    return (
        <></>
    );
}