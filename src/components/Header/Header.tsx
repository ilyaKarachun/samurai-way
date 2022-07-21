import React from 'react';
import "./Header.module.css"
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                className={classes.header__img}
                src="https://skidka02.ru/800/600/https/i.etsystatic.com/10919371/r/il/b56d68/1896464555/il_fullxfull.1896464555_qh40.jpg"/>
        </header>
    )
}

export default Header;