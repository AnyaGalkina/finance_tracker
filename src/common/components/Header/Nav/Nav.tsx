import React from 'react';
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../enums/routes-enum";


const Nav: React.FC = () => {
    return (
        <div className={style.nav}>
            <NavLink className={style.link} to={'/'}>Home</NavLink>
            <NavLink className={style.link} to={ROUTES.SPENDS}>Spends</NavLink>
            <NavLink className={style.link} to={ROUTES.INCOME}>Income</NavLink>
            <NavLink className={style.link} to={ROUTES.SAVINGS}>Savings</NavLink>
        </div>
    );
};

export default Nav;