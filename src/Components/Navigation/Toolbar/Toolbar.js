import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.module.css';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.DrawerToggle} onClick={props.togglerClicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo />
            <nav>
               <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar;