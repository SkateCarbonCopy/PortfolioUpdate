import React, { useEffect } from 'react';
import dualityPortrait from '../../../assets/img/duality.png';
import dualityPortraitDark from '../../../assets/img/dualityDark.png';
import { Link } from 'react-scroll';
import './Landing.scss';

export default function Landing() {
    useEffect(() => {
        var designerImg = document.getElementById('designer-img');
        var developerImg = document.getElementById('developer-img');
        var designerDesc = document.getElementById('designer-desc');
        var developerDesc = document.getElementById('developer-desc');		 
        var duality = document.getElementById('duality');
        var landingWrapper = document.getElementById('landingWrapper');
    
        var mouseX = 0;
        var relMouseX = 520;
        var xp = 520;
        var loop = 0;
        var frameRate =  30;
        var timeInterval = Math.round( 1000 / frameRate );		

        if (landingWrapper) {
            landingWrapper.addEventListener("mouseenter", (event) => {
                // Get mouse position
                landingWrapper.addEventListener("mousemove", (event) => {
                    // raw mouse position
                    mouseX = event.pageX;
                    // mouse position relative to duality div
                    relMouseX = mouseX - duality.offsetLeft;
                })
        
                // Animate the duality based on mouse movement
                loop = setInterval(function() {
        
                    // zeno's paradox dampens the movement
                    xp += (relMouseX - xp) / 12;
        
                    designerImg.style.width = (420 + (520 - xp) * 0.5) + "px";
                    designerImg.style.left = (100 + (520 - xp) * 0.1) + "px";		
                
                    developerImg.style.width = (420 + (xp - 520) * 0.5) + "px";
                    developerImg.style.right = (100 - (520 - xp) * 0.1) + "px";
        
                    developerDesc.style.opacity = (xp/520);
        
                    designerDesc.style.opacity = ((1040 - xp)/520);
                }, timeInterval );
            });	
            landingWrapper.addEventListener("mouseleave", (event) => {
                // reset the duality to initial state
                clearInterval(loop);
                xp 			= 520;
                mouseX 		= 0;
                relMouseX 	= 520;
        
                designerImg.style.width = "420px";
                designerImg.style.left = "100px";
        
                developerImg.style.width = "420px";
                developerImg.style.right = "100px";
        
                developerDesc.style.opacity = 1;
        
                designerDesc.style.opacity = 1;
            })
        }
    })
    return (
        <div id='landingWrapper'>
            <div id="content" className="container-xl" style={{opacity: 1}}>
                <section>
                    <div className="row">
                        <div className="col-12 duality-wrapper">
                            <div id="duality" className="duality">
                                {/* Block for XL Screens */}
                                <div className='d-none d-xl-block'>
                                    <Link
                                        to="Gallery"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        >
                                        <div id="designer" className="designer" style={{opacity: 1, zIndex: 100, textAlign: "left"}}>
                                            <div id="designer-desc" className="duality-description" style={{opacity: 1}}>
                                                <h1 className='fw-bold' style={{fontFamily: "ui-serif"}}>designer</h1>
                                                <p className='d-none d-md-block'>Graphic Designer and artist specialising in UI design.</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link
                                        to="Portfolio"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        >
                                        <div id="developer" className="developer" style={{opacity: 1, zIndex: 100}}>
                                            <div id="developer-desc" className="duality-description" style={{opacity: 1}}>
                                                <h1 className='font-style-courier fw-bold'>
                                                    <span className='chevron-left'>&lt;</span>
                                                    developer
                                                    <span className="chevron-right">/&gt;</span>
                                                </h1>
                                                <p className='d-none d-md-block'>Front end developer with a penchant for building engaging user interfaces.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* Block for less than XL Screens */}
                                <div className='d-flex flex-wrap d-xl-none smallScreens justify-content-around'>
                                    <div style={{position:"absolute", marginRight: "50%", marginTop: "5%"}}>
                                        <Link
                                            className='text-decoration-none'
                                            to="Gallery"
                                            spy={true}
                                            smooth={true}
                                            offset={-60}
                                            duration={500}
                                            >
                                                <h2 className='duality-description fw-bold' style={{fontFamily: "ui-serif"}}>designer</h2>
                                        </Link>
                                    </div>
                                    <div style={{position:"absolute", marginLeft: "50%", marginTop: "5%"}}>
                                        <Link
                                            className='text-decoration-none'
                                            to="Portfolio"
                                            spy={true}
                                            smooth={true}
                                            offset={-60}
                                            duration={500}
                                            >
                                            <h2 className='font-style-courier fw-bold duality-description'>developer</h2>
                                        </Link>
                                    </div>
                                </div>
                                <img id="duality-img" className="duality-img img-fluid position-relative lm-only" src={dualityPortrait} alt="Colin Gastelle Combined Portraits"></img>
                                <img id="duality-img" className="duality-img img-fluid position-relative dm-only" src={dualityPortraitDark} alt="Colin Gastelle Combined Portraits"></img>
                                <div id="designer-img" className="designer-img" style={{left: "100px", opacity: 1, width: "420px"}}></div>
                                <div id="developer-img" className="developer-img" style={{right: "100px", opacity: 1, width: "420px"}}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}