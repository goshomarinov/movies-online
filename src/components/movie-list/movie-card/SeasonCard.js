import seasonCardStyle from '../movie-card/SeasonCard.module.css'

export const SeasonCard = ({name, seasonNum, poster}) => {

    return (
        <div className={seasonCardStyle['card-container']}>
            <img src={poster}/>
            <h3>{name}: Season {seasonNum}</h3>
        </div>
    );
}