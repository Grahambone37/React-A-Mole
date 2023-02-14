import './App.css';
import React, { useState } from 'react'
import MoleContainer from './mole-container';

function App() {
  let [score, setScore] = useState(0)

  let handleClick = (e) => {
    console.log(score + 1)
    setScore(score += 1)
  }

  let createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer key={i} handleClick={handleClick} />
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
      {createMoleHill()}
    </div>
  );
}

export default App;
