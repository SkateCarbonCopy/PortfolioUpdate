import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import './Portfolio.scss';
import Projects from './Projects/Projects';

export default function Portfolio() {
    return (
        <div id='Portfolio' style={{overflowX: "clip"}}>
            <Projects />
            <Gallery />
        </div>
    )
}