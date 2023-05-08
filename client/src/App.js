import React, { useState, useEffect } from 'react';
import './App.scss';
import '@theme-toggles/react/css/Lightbulb.css';

import { Fade } from "react-awesome-reveal";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import References from "./components/References/References";
import Resume from "./components/Resume/Resume";

function App() {
    const [appTheme, setAppTheme] = useState('');

    // set the user's preferred theme
    useEffect(() => {
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.querySelector("html").setAttribute("data-bs-theme", preferredTheme);
        setAppTheme(preferredTheme);
    }, []);

    const handleAppThemeUpdate = newTheme => {
      setAppTheme(newTheme);
    }

    return (
        <div className="App">
            <Home onAppThemeUpdate={handleAppThemeUpdate} theme={appTheme} />
            <Fade>
                <AboutMe theme={appTheme} />
            </Fade>
            <Fade>
                <Portfolio />
            </Fade>
            <Fade>
                <References />
            </Fade>
            <Fade>
                <Resume />
            </Fade>
        </div>
    );
}

export default App;
