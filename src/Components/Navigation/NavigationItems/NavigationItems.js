import React from 'react';

import classes from './NavigationItems.module.css';

const NavigationItems = (propps) => {
    return (
        <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}> <a className={classes.active} href='/' >Burger Builder </a> </li>
            <li className={classes.NavigationItem}> <a href='/' > CheckOut</a> </li>
        </ul>
    )
}

export default NavigationItems;