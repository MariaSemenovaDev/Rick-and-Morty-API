import React, {useEffect, useState} from 'react';
import s from './CharacterPage.module.css'
import axios from "axios";

export const CharacterPage = () => {

    const [characters, setCharacters] = useState([])

    //let a = 1 //если [] - то один перерендер, если нет
    // массива зависимостей то перерисовка каждый раз когда что-то меняется,
    // если укажем переменную,то можем указать - делай перерисовку когда а меняется


    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            setCharacters(res.data.results)
        })
    }, [])


    return (
        <div className={"pageContainer"}>
            <h1 className={"pageTitle"}>CharacterPage</h1>
            {characters.length && (
                <div  className={s.characters}>
                    {characters.map((character) => {
                        return (
                            <div key={character.id} className={s.character}>
                                <div className={s.characterLink}>{character.name}</div>
                                <img src={character.image} alt={`${character.name} avatar`} />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
};
