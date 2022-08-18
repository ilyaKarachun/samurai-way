import React from 'react';
import "./Nav.module.css"
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to='/dialogies' activeClassName={classes.active}>Messages</NavLink></div>
            <div className={classes.item}><NavLink to='/news' activeClassName={classes.active}>News</NavLink></div>
            <div className={classes.item}><NavLink to='/music' activeClassName={classes.active}>Music</NavLink></div>
            <div className={classes.item}><NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink></div>

        </nav>
    )
}

export default Nav;