import React from 'react';
import style from "./Header.module.css";
import Nav from "./Nav/Nav";

const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <Nav />
        </div>
    );
};

export default Header;