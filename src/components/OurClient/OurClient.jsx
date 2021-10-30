import React from "react";
import './../../styles/OurClient.css';
import { useState } from "react";


const OurClient = (props) => {
 
    const onMouseTarget = (event) => {
        let target = event.target;
        target.style.background = '#1f3f6833';
    }
    
    const leaveMouseTarget = (event) => {
        let target = event.target;
        target.style.background = '';
    }


    return(
        <div className="ourClient">
            <div className="ourClient__container">
                <div className="ourClient__box-title">
                    <div className="ourClient__title title">
                       <span>Our Beloved</span> 
                       <span>Client</span> 
                    </div>
                    <div className="ourClient__subtitle subtitle">
                       <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span> 
                       <span>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</span> 
                       <span>enim ad minim veniam.</span> 
                    </div>
                </div>
                <div className="ourClient__box-logo" onMouseOver={(event) => {onMouseTarget(event)}} 
                                                     onMouseOut={(event) => {leaveMouseTarget(event)}}>
                    <div className="ourClient__logo ourClient__item1">LOGO CLIENT 1</div>
                    <div className="ourClient__logo ourClient__item2">LOGO CLIENT 2</div>
                    <div className="ourClient__logo ourClient__item3">LOGO CLIENT 3</div>
                    <div className="ourClient__logo ourClient__item4">LOGO CLIENT 4</div>
                    <div className="ourClient__logo ourClient__item5">LOGO CLIENT 5</div>
                    <div className="ourClient__logo ourClient__item6">LOGO CLIENT 6</div>
                    <div className="ourClient__logo ourClient__item7">LOGO CLIENT 7</div>
                    <div className="ourClient__logo ourClient__item8">LOGO CLIENT 8</div>
                </div>
            </div>
        </div>
    );
}

export default OurClient;
