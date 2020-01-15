import React from "react";
import {Link} from "react-router-dom";
import classes from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <ul className={classes.menu}>
            <li className={classes.menu__link}><Link to='/'>top</Link></li>
            <li className={classes.menu__link}><Link to='/about'>about</Link></li>
            <li className={classes.menu__link}><Link to='/list'>list</Link></li>
            <li className={classes.menu__link}><Link to='/page3'>page3</Link></li>
        </ul>
    )
}

export default Header
