import React, {useState} from 'react';
import './ToggleTheme.scss';
import { Lightbulb } from "@theme-toggles/react";

export default function ToggleTheme() {
    const [isToggled, setToggle] = useState(false);

    const toggleTheme = function () {        
        let themeColor = document.querySelector("html").getAttribute("data-bs-theme");
        const htmlDoc = document.querySelector("html");
        const currentThemeSetting = htmlDoc.getAttribute("data-bs-theme");
        if (currentThemeSetting === "dark") {
            themeColor = "light";
            console.log(`Updated theme to ${themeColor}`);
            htmlDoc.setAttribute("data-bs-theme", "light");
        } else {
            themeColor = "dark";
            console.log(`Updated theme to ${themeColor}`);
            htmlDoc.setAttribute("data-bs-theme", "dark");
        }
    }

    return (
        <div>
            <div className='themeToggleElement toggle-shadow' onClick={() => {
                toggleTheme();
                setToggle(!isToggled);
            }}>
                <h1 className='fs-xl mb-0'>
                    <Lightbulb toggled={isToggled} toggle={setToggle} reversed={true} />
                </h1>
            </div>
        </div>
    )
}