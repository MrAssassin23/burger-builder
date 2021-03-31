import React from 'react';

import classes from './Logo.module.css';
import BurgerLogo from '../../Assets/imgs/burger-logo.png'

const Logo = () => (
    <div className={classes.Logo} >
        <img alt={'Burger Logo'} src={BurgerLogo} />
    </div>
)

export default Logo