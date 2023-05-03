import React from 'react';
import './ToggleTheme.scss';
import { Lightbulb } from "@theme-toggles/react";

export default function ToggleTheme(props) {

    const toggleTheme = () => {               
        if (document.querySelector("html").getAttribute("data-bs-theme") === "dark") {  
            document.querySelector("html").setAttribute("data-bs-theme", "light");
            props.onThemeToggle("light");
        } else {
            document.querySelector("html").setAttribute("data-bs-theme", "dark");
            props.onThemeToggle("dark");
        }
    }

    return (
        <div className='themeToggleElement toggle-shadow' onClick={toggleTheme}>
            <h1 className='fs-xl mb-0'>
                <Lightbulb />
            </h1>
        </div>
    )
}