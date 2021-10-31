import React from "react";
import './../../styles/WhatWeDo.css';
import item1 from './../../source/images/item1.png';
import item2 from './../../source/images/item2.png';
import item3 from './../../source/images/item3.png';


const WhatWeDo = () => {
    return(
        <section className="whatWeDo__container">
                <div className="whatWeDo__box">
                        <div className="whatWeDo__title title">
                                <span>What we do to help</span> 
                                <span>our client grow in</span>
                                <span>digital era,</span>
                        </div>
                        <div className="whatWeDo__item2">
                                <div className="whatWeDo__item-img">
                                        <img src={item2} alt="man" />
                                </div>
                                <div className="whatWeDo__item-title">
                                        <span>Make Your business To Be</span> 
                                        <span>Better Famous In Internet</span>        
                                </div>
                                <div className="whatWeDo__item-text">
                                        <span>Lorem ipsum dolor sit amet,</span> 
                                        <span>consectetur adipiscing elit, sed do</span>  
                                        <span>eiusmod tempor incididunt ut</span>  
                                        <span>labore et dolore magna aliqua.</span>  
                                </div>
                                <div className="whatWeDo__item-button">
                                        <button>Learn more</button>
                                </div>
                        </div>
                </div>
                <div className="whatWeDo__box">
                        <div className="whatWeDo__item1">
                                <div className="whatWeDo__item-img">
                                        <img src={item1} alt="man" />
                                </div>
                                <div className="whatWeDo__item-title">
                                        <span>Bring Technology To Your</span>  
                                        <span>Comfrotable Home </span>            
                                </div>
                                <div className="whatWeDo__item-text">
                                        <span>Lorem ipsum dolor sit amet,</span> 
                                        <span>consectetur adipiscing elit, sed do</span>  
                                        <span>eiusmod tempor incididunt ut</span>  
                                        <span>labore et dolore magna aliqua.</span>  
                                        </div>
                                <div className="whatWeDo__item-button">
                                        <button>Learn more</button>
                                </div>
                        </div>
                        <div className="whatWeDo__item3">
                                <div className="whatWeDo__item-img">
                                        <img src={item3} alt="man" />
                                </div>
                                <div className="whatWeDo__item-title">
                                        <span>Build Your Digital Product</span> 
                                        <span>That Suitable For Your Need</span> 
                                </div>
                                <div className="whatWeDo__item-text">
                                        <span>Lorem ipsum dolor sit amet,</span> 
                                        <span>consectetur adipiscing elit, sed do</span>  
                                        <span>eiusmod tempor incididunt ut</span>  
                                        <span>labore et dolore magna aliqua.</span>  
                                </div>
                                <div className="whatWeDo__item-button">
                                        <button>Learn more</button>
                                </div>
                        </div>  
                </div>
        </section>
    );
}

export default WhatWeDo;







                    



               