import './App.css';
import React, { useState, useEffect } from 'react'
import MoleContainer from './mole-container';

function App() {
  let [score, setScore] = useState(0)
  let displayMole = false

  let createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer key={i} setScore={setScore} score={score} displayMole={displayMole} className="box" />
      )
    }
    return (
      <div className='three-by-three'>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      <div>
        {createMoleHill()}
      </div>
    </div>
  );
}

export default App;
