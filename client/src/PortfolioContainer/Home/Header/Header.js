import React from 'react';
import './Header.scss';
import logo from '../../../assets/img/logo.png';

export default function Header() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg navbar-dark-custom" id='site-nav'>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className='d-flex grow-nav-link'>
                            <a className="nav-link site-nav-link-lg active mx-lg-4 fw-bold text-white" aria-current="page" href="#">About Me</a>
                        </div>
                        <div className='d-flex grow-nav-link'>
                            <a className="nav-link site-nav-link-lg mx-lg-4 fw-bold text-white-75" href="#">Projects</a>
                        </div>
                        <div className='d-flex grow-nav-link'>
                            <a className="nav-link site-nav-link-lg" href="#">
                                <img src={logo} style={{width: "30px", height: "30px"}} alt="Colin Gastelle Logo" />
                            </a>
                        </div>
                        <div className='d-flex grow-nav-link'>
                            <a className="nav-link site-nav-link-lg mx-lg-4 fw-bold text-white-75" href="#">Recommendations</a>
                        </div>
                        <div className='d-flex grow-nav-link'>
                            <a className="nav-link site-nav-link-lg mx-lg-4 fw-bold text-white-75" href="#">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}