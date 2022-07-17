import React from 'react';
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <div className={style.nav}>
            {/*<a href={"#"}>About</a>*/}

            <NavLink className={style.link} to={'/about'}>About</NavLink>
            <NavLink className={style.link} to={'/skills'}>Skills</NavLink>
            <NavLink className={style.link} to={'/projects'}>Projects</NavLink>
            <NavLink className={style.link} to={'/contacts'}>Contacts</NavLink>
        </div>
    );
};

export default Nav;