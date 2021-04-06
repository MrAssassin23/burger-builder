import React from 'react';

import classes from './NavigationItems.module.css';
import { NavLink} from 'react-router-dom'

const NavigationItems = (propps) => {
    return (
        <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}> <NavLink to='/' exact activeClassName={classes.active} >Burger Builder </NavLink> </li>
            <li className={classes.NavigationItem}> <NavLink to='/Checkout' activeClassName={classes.active}> CheckOut</NavLink> </li>
        </ul>
    )
}

export default NavigationItems;