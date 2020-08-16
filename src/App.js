import './App.css';
import React from 'react';
import WordCard from './WordCard.js';
const word = "Beauty";

function App() {
    return ( 
        <div >
            <WordCard value = { word }/>
        </div>
    );
}

export default App;