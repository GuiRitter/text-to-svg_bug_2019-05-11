import React from 'react';
import logo from './logo.svg';
import './App.css';

import { embeddedFont } from './EmbeddedFont';

let TextToSVG = require('text-to-svg');

function App() {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p onClick={() => {
                TextToSVG.load(embeddedFont, (err, textToSVG) => {
                    console.log(textToSVG);
                });
            }}>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>;
}

export default App;
