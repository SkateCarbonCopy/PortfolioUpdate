import React, { useEffect } from 'react';
import './App.scss';
import '@theme-toggles/react/css/Lightbulb.css';

import { Fade } from "react-awesome-reveal";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import References from "./components/References/References";
import Resume from "./components/Resume/Resume";

function App() {
  // set theme color
  useEffect(() => {
      var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var htmlDoc = document.querySelector("html");
      htmlDoc.setAttribute("data-bs-theme", theme);
  })
  return (
    <div className="App">
      <Home />
      <Fade>
        <AboutMe />
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
