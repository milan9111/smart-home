import React from "react";
import '../../styles/OurProject.css';
import item1 from '../../source/images/ourProject1.png';
import item2 from '../../source/images/ourProject2.png';
import item3 from '../../source/images/ourProject3.png';


const OurProject = (props) => {
    return(
        <div className="ourProject__container">
            <div className="ourProject__box-title">
                <div className="ourProject__title title">
                   <span> Our Finished</span>
                   <span>Project</span> 
                </div>
                <div className="ourProject__subtitle subtitle">
                   <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</span> 
                   <span>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </span>  
                   <span>enim ad minim veniam.</span> 
                </div>
            </div>
            <div className="ourProject__box-images">
                 <div className="ourProject__item1">
                    <img src={item1} alt="our project" />
                    <div className="ourProject__item1-box">
                        <div className="ourProject__item1-title">
                            Smart Home Installation
                        </div>
                        <div className="ourProject__item1-subtitle">
                            In Muarakana Housing Estate
                        </div>
                    </div>
                 </div>
                 <div className="ourProject__item2">
                    <img src={item2} alt="our project" />
                    <div className="ourProject__item2-box">
                        <div className="ourProject__item2-title">
                            Sparklite App
                        </div>
                        <div className="ourProject__item2-subtitle">
                            Marketplace
                        </div>
                    </div>
                 </div>
                 <div className="ourProject__item3">
                    <img src={item3} alt="our project" />
                    <div className="ourProject__item3-box">
                        <div className="ourProject__item3-title">
                            Car-Rapetition App
                        </div>
                        <div className="ourProject__item3-subtitle">
                            Board
                        </div>
                    </div>
                 </div>   
            </div>
        </div>
    );
}


export default OurProject;