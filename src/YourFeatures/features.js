import React from 'react';
import classes from './features.module.css';
import tickGrey from '../assests/tick-gray.png';
import tickBlue from '../assests/tick-blue.png';
import userRed from '../assests/user-red.png';
import userBlue from '../assests/user-blue.png';
import userOrange from '../assests/user-orange.png';
import userPink from '../assests/user-pink.png';

const cards = ()=>{
    let arr = [
        {
            tick: tickGrey,
            text: "Dmm design",
            profile: userPink,
            date: "20 Dec",
            span: {backgroundColor: "pink"}
        },
        {
            tick: tickBlue,
            text: "Blurr animation",
            profile: userOrange,
            date: "22 Dec",
            span: {backgroundColor: "red"}
        },
        {
            tick: tickGrey,
            text: "Illustration",
            profile: userBlue,
            date: "26 Dec",
            span: {backgroundColor: "green"}
        },
        {
            tick: tickGrey,
            text: "Refunds",
            profile: userRed,
            date: "28 Dec",
            span: {backgroundColor: "orange"}
        }
    ]


    let cardsRender = arr.map(item =>{

        return(
            <div className={classes.item}>
                <div className={classes.itemNameDiv}>
                    <img className={classes.tickImage} src={item.tick} alt="" />
                    <p className={classes.itemTitle}>{item.text}</p>
                </div>
                <div className={classes.itemColorDiv}> 
                    <img className={classes.userProfile} src={item.profile} alt="" />
                    <p className={classes.itemDate}>{item.date}</p>
                    <span className={classes.itemSpan} style={item.span}></span>
                </div>
            </div>
        );
    })

    return(
        <div className={classes.itemsWrapper}>
            {cardsRender}
        </div>
    );
}
export default cards;