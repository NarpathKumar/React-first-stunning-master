import React from 'react';
import classes from './main.module.css';
import MainLeft from '../mainLeft/mainLeft'
import rightImage from '../assests/landing-section-image.png'
const main = ()=>{
    return(
        <div className={classes.mainPage}>
            <MainLeft />
            <img className={classes.landingImage} src={rightImage} alt=""/>
        </div>
    );
}
export default main;
