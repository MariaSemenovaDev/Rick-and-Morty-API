import React, {useEffect, useState} from 'react';
import axios from "axios";
import s from './LocationPage.module.css'

export const LocationPage = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location").then((res) => {
            setLocations(res.data.results)
        })
    }, [])

    return (
        <div className={"pageContainer"}>
            <h2 className={"pageTitle"}>
                LocationPage
            </h2>

            {locations.length && (
                <div className={s.locations}>
                    {locations.map((location) => {
                        return (
                            <div>
                                <ul key={location.id} className={s.locationLink}>
                                    <li>Название локации: <b>{location.name}</b></li>
                                    <li>Тип локации: <b>{location.type}</b></li>
                                    <li>Измерение, в котором находится местоположение: <b>{location.dimension}</b></li>
                                    <li>Количество персонажей, которых видели в данной
                                        локации: <b>{location.residents.length}</b></li>
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
