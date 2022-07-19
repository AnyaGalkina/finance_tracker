import React from 'react';
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";


const Nav: React.FC = () => {
    return (
        <div className={style.nav}>
            <NavLink className={style.link} to={'/'}>Home</NavLink>
            <NavLink className={style.link} to={'/spends'}>Spends</NavLink>
            <NavLink className={style.link} to={'/income'}>Income</NavLink>
            <NavLink className={style.link} to={'/savings'}>Savings</NavLink>
        </div>
    );
};

export default Nav;