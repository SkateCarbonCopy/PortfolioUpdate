import React from 'react';
import Landing from './Landing/Landing';
import Header from './Header/Header';
import './Home.scss';

export default function Home() {
    return (
        <div className='home-container'>
            <Header />
            <Landing />
        </div>
    )
}