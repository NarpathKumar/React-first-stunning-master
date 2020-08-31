import React from 'react';
import classes from './landing.module.css';
import downImage from '../assests/arrow-up.png';
import upImage from '../assests/arrow-down.png';

const landing = ()=>{
    return(
        <div className={classes.descDiv}>
            <h1 className={classes.title}>Stunning</h1>
            <h1 className={classes.title}>Workplace<span className={classes.dot}>.</span></h1>
            <p className={classes.desc}>With Stunning, remote teams can organize projects,manage shifting priorities, and get work done.</p>
            <div className={classes.buttonDiv}>
                <button className={classes.button}>New Account</button>
                <img className={classes.image} src={downImage} alt=""/>
                <img className={classes.image} src={upImage} alt=""/>
            </div>
        </div>
    );
}
export default landing;