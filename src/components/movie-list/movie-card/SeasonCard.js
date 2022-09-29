import seasonCardStyle from '../movie-card/SeasonCard.module.css'
import { Link } from 'react-router-dom';


export const SeasonCard = ({season, poster, name}) => {
    
    return (
        <div className={seasonCardStyle['card-container']}>
            <img src={poster}/>
            <h3>{name}: Season {season.season_number}</h3>
        <Link to={`/play/${name}/${season.season_number}/${season.episodes.length}`}>Watch Online</Link>
        </div>
    );
}