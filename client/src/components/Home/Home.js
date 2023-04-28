import React from 'react';
import Landing from './Landing/Landing';
import Header from './Header/Header';
import ToggleTheme from './ToggleTheme/ToggleTheme';
import { Fade } from "react-awesome-reveal";
import './Home.scss';

export default function Home() {
    return (
        <div className='home-container'>
            <Header />
            <Fade>
                <Landing />
            </Fade>
            <ToggleTheme />
        </div>
    )
}