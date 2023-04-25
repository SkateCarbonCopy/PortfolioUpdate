import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import Scrollspy from 'react-scrollspy'
import './Header.scss';
import logo from '../../../assets/img/logo.png';

export default function Header() {

    const scrollToTop = function () {
        animateScroll.scrollToTop();
    }
    
    return (
        <Scrollspy className='d-flex w-100' items={["AboutMe", "Portfolio", "References", "Resume"]}>
            <nav className="navbar navbar-dark navbar-expand-lg navbar-dark-custom fixed-top" id='site-nav'>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* About Me */}
                            <div className='d-flex grow-nav-link order-2 order-lg-1'>
                                <Link
                                    className="nav-link site-nav-link-lg mx-lg-4 fw-bold text-white-75"
                                    to="AboutMe"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    >About Me</Link>
                            </div>
                            {/* Portfolio */}
                            <div className='d-flex grow-nav-link order-3 order-lg-2'>
                                <Link
                                    className="nav-link site-nav-link-lg mx-lg-4 fw-bold text-white-75"
                                    to="Portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    >Portfolio</Link>
                            </div>
                            {/* Home */}
                            <div className='d-flex grow-nav-link order-1 order-lg-3'>
                                <Link
                                    className="nav-link site-nav-link-lg"
                                    to="/"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={scrollToTop}
                                    >
                                        <img src={logo} style={{width: "30px", height: "30px"}} alt="Colin Gastelle Logo" />
                                    </Link>
                            </div>
                            {/* References */}
                            <div className='d-flex grow-nav-link order-4'>
                                <Link
                                    className="nav-link site-nav-link-lg mx-lg-4 fw-bold text-white-75"
                                    to="References"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    >References</Link>
                            </div>
                            {/* Resume */}
                            <div className='d-flex grow-nav-link order-5'>
                                <Link
                                    className="nav-link site-nav-link-lg mx-lg-4 fw-bold text-white-75"
                                    to="Resume"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    >Resume</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Scrollspy>
    )
}