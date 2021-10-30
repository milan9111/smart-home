import React from "react";
import '../../styles/Footer.css';
import logoFooter from './../../source/images/logo-footer.png';


const Footer = (props) => {
    return(
        <div className="footer">
                <div className="footer__container">
                    <div className="footer__top">
                        <div className="footer__box-title">
                            <div className="footer__title title">
                                <span>Intersted to woek</span>  
                                <span>with our team?</span>  
                            </div>
                            <div className="footer__subtitle subtitle">
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</div>
                                <div>sed do eiusmod tempor incididunt ut labore et dolore</div> 
                                <div>magna aliqua. Ut enim ad minim veniam.</div> 
                            </div>
                        </div>
                        <div className="footer__button button">
                            <button>Let’s Talk</button>
                        </div> 
                    </div>
                    <div className="footer__middle">
                        <div className="footer__box-column">
                            <div className="footer__column-logo">
                                <div className="footer__column-title">
                                    <a href="#"><img src={logoFooter} alt="logo" /></a>
                                    <span>
                                        Afrianska
                                    </span>
                                </div>
                                <div className="footer__column-text">
                                     <div className="footer__colum-text-top">Lorem ipsum dolor sit amet,</div> 
                                     <div className="footer__colum-text-bottom">consectetur adipisicing elit.</div> 
                                </div>
                                <div className="footer__column-tel">
                                     <a href="tel:+6281273134321">+62-812-7313-4321</a>
                                </div>
                                <div className="footer__column-email">
                                     <a href="mailto:hello.afrian@gmail.com">hello.afrian@gmail.com</a>
                                </div>
                            </div>
                            <div className="footer__column">
                                 <nav>
                                     <div className="footer__column_subtitle">
                                        About US
                                     </div>
                                     <div className="footer__column_link">
                                         <a href="#">About</a>
                                     </div>
                                     <div className="footer__column_link">
                                         <a href="#">What We Do</a>
                                     </div>
                                     <div className="footer__column_link">
                                         <a href="#">Project</a>
                                     </div>
                                     <div className="footer__column_link">
                                         <a href="#">How It Work With Us</a>
                                     </div>
                                 </nav>
                            </div>
                            <div className="footer__column">
                                 <nav>
                                     <div className="footer__column_subtitle">
                                        Follow US
                                     </div>
                                     <div className="footer__column_link">
                                         <a href="#">Instagram</a>
                                     </div>
                                     <div className="footer__column_link">
                                         <a href="#">Facebook</a>
                                     </div>
                                     <div className="footer__column_link">
                                         <a href="#">LinkedIn</a>
                                     </div>
                                     <div className="footer__column_link">
                                         <a href="#">Youtube</a>
                                     </div>
                                 </nav>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__bottom-box">
                            <time datetime="2019">2019</time> © Afrianska. All rights reserved.
                        </div>
                    </div>
                </div>
        </div>
    );
}


export default Footer;