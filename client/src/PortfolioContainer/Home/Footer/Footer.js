import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <div className='footer-container d-none d-xl-block'>
            <div className='footer-parent'>
                <img src={require('../../../assets/img/drip.png')} alt="Landing Drip" />
            </div>
        </div>
    )
}