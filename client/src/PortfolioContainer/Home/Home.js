import React, { Component } from 'react';
import Landing from './Landing/Landing';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Home.scss';

export default function Home() {
    return (
        <div className='home-container'>
            <Header />
            <Landing />
            <Footer />
        </div>
    )
}