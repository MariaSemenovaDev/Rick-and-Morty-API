import React, {useEffect, useState} from 'react';
import s from "./EpisodePage.module.css"
import axios from "axios";


export const EpisodePage = () => {
    const [episodes, setEpisode] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode").then((res) => {
            setEpisode(res.data.results)
        })
    }, [])

    return (
        <div className={"pageContainer"}>
            <h2 className={"pageTitle"}>
                EpisodePage
            </h2>

            {episodes.length && (
                <div className={s.episodes}>
                    {episodes.map((episode) => {
                        return (
                            <div>
                                <ul key={episode.id} className={s.episodeLink}>
                                    <li>Эпизод: <b>{episode.episode}</b></li>
                                    <li>Название эпизода: <b>{episode.name}</b></li>
                                    <li>Дата выхода эпизода в эфир: <b>{episode.air_date}</b></li>
                                    <li>Список персонажей, которые были замечены в эпизоде: <b>{episode.characters.length}</b></li>
                                </ul>
                                <hr/>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>

    );
};
