import React from 'react';
import { TOTAL_SCREENS } from '../utilities/CommonUtils';
import { Fade } from "react-awesome-reveal";

export default function PortfolioContainer() {
    const mapAllScreens = () => {
        return TOTAL_SCREENS.map((screen) => 
                screen.component ? (
                    <Fade>
                        <screen.component screenName={screen.screen_name} key={screen.screen_name} id={screen.screen_name} />
                    </Fade>
                ) : (
                    <div key={screen.screen_name}></div>
                )
            );
    }

    return (
        <div className='portfolio-container'>{mapAllScreens()}</div>
    )
}