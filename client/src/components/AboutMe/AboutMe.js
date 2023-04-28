import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import "./AboutMe.scss";

export default function AboutMe() {
    return (
        <div id='AboutMe' className='d-flex flex-wrap py-5 dark-section'>
            <div className="container">
                <div className='text-white-50 fw-bold section-title'>
                    <span className='ps-3'>ABOUT</span>
                    <div className="clear"></div>
                    <span className='position-absolute-lg'>ME</span>
                </div>
                <div className="row justify-content-end my-lg-5 my-3">
                    <div className='col-lg-9' style={{zIndex: 100}}>
                        <h1 className='text-light' >Hi, my name is Colin Gastelle.</h1>
                        <h3 className='very-dark-tan fw-bold'>
                            I am&nbsp;
                            <TypeAnimation sequence={[
                                'an enthusiastic dev', 3000, 
                                'a front end developer', 3000, 
                                'a graphic designer', 3000, 
                                'an adventure seeker', 3000, 
                                'a lifelong learner', 3000 ]}
                                            wrapper="span"
                                            cursor={true}
                                            repeat={Infinity}
                                            />
                        </h3>
                        <h5 className='fw-bold very-dark-tan'>I am a highly motivated Web Developer at Hyland Software with a passion for exploring and learning new technologies. I am proficient in AngularJS, JavaScript, HTML, and SCSS. I am always seeking opportunities to expand my technical aptitude, stay current with industry trends, and grow as a professional.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}