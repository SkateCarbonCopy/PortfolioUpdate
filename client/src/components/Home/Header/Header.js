import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import Scrollspy from 'react-scrollspy'
import './Header.scss';
import logo from '../../../assets/img/logo.png';

export default function Header(props) {    

    const scrollToTop = function () {
        animateScroll.scrollToTop();
    }

    return (
        <Scrollspy className='d-flex w-100' items={["AboutMe", "Portfolio", "References", "Resume"]}>
            <nav className={`navbar ${props.siteTheme === 'dark' ? "navbar-dark bg-dark" : "navbar-light bg-light"} navbar-expand-lg fixed-top`} id='site-nav'>
                <div className="container-fluid justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end justify-content-lg-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav align-items-end align-items-lg-center">
                            {/* About Me */}
                            <div className='d-flex grow-nav-link order-2 order-lg-1'>
                                <Link
                                    className={`nav-link site-nav-link-lg mx-lg-4 fw-bold ${props.siteTheme === 'dark' ? "text-white-75" : "text-black-75"}`}
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
                                    className={`nav-link site-nav-link-lg mx-lg-4 fw-bold ${props.siteTheme === 'dark' ? "text-white-75" : "text-black-75"}`}
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
                                    className="nav-link site-nav-link-lg mt-lg-0 mt-3"
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
                                    className={`nav-link site-nav-link-lg mx-lg-4 fw-bold ${props.siteTheme === 'dark' ? "text-white-75" : "text-black-75"}`}
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
                                    className={`nav-link site-nav-link-lg mx-lg-4 fw-bold ${props.siteTheme === 'dark' ? "text-white-75" : "text-black-75"}`}
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