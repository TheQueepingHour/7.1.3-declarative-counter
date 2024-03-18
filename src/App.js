import React from 'react'
import { useState } from 'react';
import './App.css';

function App() {
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
