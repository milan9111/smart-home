import React from "react";
import './../../styles/Hero.css';
import illustration from './../../source/images/illustration.png'


const Hero = (props) => {
    return(
        <>
        <div className='hero__container'>
            <div className="hero__text">
                <div className="hero__title title">
                    <span>New Automation</span>  
                    <span>Tool for Your Home</span> 
                </div>
                <div className="hero__subtitle subtitle">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>    
                    <span>elit. Faucibus tristique vulputate ultrices ut mauris</span> 
                    <span>tellus at. Posuere sollicitudin odio tellus elit.</span> 
                </div>
            </div>
            <div className="hero__image">
                <img src={illustration} alt="illustration" />
            </div>
            <div className="hero__button button">
                    <button>See Our Project</button>
            </div>
        </div>
        
        </>
    );
}

export default Hero;