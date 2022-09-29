import playerStyles from '../player/Player.module.css';
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import { useEffect, useState } from "react";

export const Player = () => {
    const { name, season, episodes } = useParams();
    const [buttons, setButtons] = useState([]);
    const [episode, setEpisode] = useState(1);

    useEffect(() => {
        if (episodes == undefined || episodes == '') {
            return;
        }
        const buttons = [];
        const value = Number(episodes);
        for (let i = 1; i <= value; i++) {
            buttons.push(i);
        }

        setButtons(buttons);
    }, [])

    const clickHandler = (e) => {
        setEpisode(e.target.textContent);
    }
    return (
        <>
            {season == undefined
                ? <div className={playerStyles['container']}>
                    <h1>{name}</h1>
                    <ReactPlayer controls={true} />
                </div>
                : <div className={playerStyles['container']}>
                    <h1>{name} Season {season} Episode {episode}</h1>
                    <ReactPlayer controls={true} />
                    <div className={playerStyles['container-btn']}>
                        {buttons.map(b => <button key={b} onClick={clickHandler}>{b}</button>)}
                    </div>
                </div>
            }

        </>

    );
}