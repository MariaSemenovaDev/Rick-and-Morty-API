import React from 'react';
import logo from '../assets/img/logo.png';
import {NavLink} from "react-router";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div className={s.container}>
            <NavLink to="/">
                <img className={s.logo} src={logo} alt="logo" />
            </NavLink>
            <NavLink to={"/"}
                         className={({ isActive }) =>
                             isActive ? `${s.headerLink} ${s.active}` : s.headerLink
                         }
            >
                Home
            </NavLink>
            <NavLink to={"/characters"}
                     className={({ isActive }) =>
                         isActive ? `${s.headerLink} ${s.active}` : s.headerLink
                     }>
                Characters
            </NavLink>
            <NavLink to={"/locations"}
                     className={({ isActive }) =>
                         isActive ? `${s.headerLink} ${s.active}` : s.headerLink
                     }>
                Locations
            </NavLink>
            <NavLink to={"/episodes"}
                     className={({ isActive }) =>
                         isActive ? `${s.headerLink} ${s.active}` : s.headerLink
                     }>
                Episodes
            </NavLink>
        </div>
    );
};