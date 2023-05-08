import React from 'react';
import Landing from './Landing/Landing';
import Header from './Header/Header';
import ToggleTheme from './ToggleTheme/ToggleTheme';
import { Fade } from "react-awesome-reveal";
import './Home.scss';

export default function Home(props) {
    const handleThemeToggle = newTheme => {
        props.onAppThemeUpdate(newTheme);
    }

    return (
        <div className='home-container'>
            <Header siteTheme={props.theme} />
            <Fade>
                <Landing />
            </Fade>
            <ToggleTheme onThemeToggle={handleThemeToggle} />
        </div>
    )
}