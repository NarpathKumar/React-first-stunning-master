import React from 'react';
import classes from './topbar.module.css';
import stunningImage from '../assests/stunning-logo.png';

const topbar = ()=>{
    return(
        <header className={classes.header}>
            <img className={classes.stunningImage} src={stunningImage} alt="stunning-logo"/>
            <div className={classes.menuItemWrapper}>
                <span className={classes.menuItems}>Home</span>
                <span className={classes.menuItems}>About</span>
                <span className={classes.menuItems}>Blog</span>
                <span className={classes.menuItems}>Jobs</span>
            </div>
            <button className={classes.accButton}>Your Account</button>
            <div className={classes.moboIcon}>
                <i class="fas fa-bars"></i>
            </div>
        </header>
    );
}

export default topbar;