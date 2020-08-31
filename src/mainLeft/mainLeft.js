import React from 'react';
import classes from './mainLeft.module.css';
import Landing from '../LandingSection/landing'
import ItemCards from '../YourFeatures/features'
import rightImage from '../assests/landing-section-image.png'

const leftSection = ()=>{
    return(
        <div className={classes.mainleft}>
            <Landing />
            <img className={classes.leftSideMoboImage} src={rightImage} alt="" />
            <ItemCards />
        </div>
    );
}

export default leftSection;