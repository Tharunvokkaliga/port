import React, { useState } from 'react';
import StartPage from './StartPage';
import PortfolioPage from './PortfolioPage';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {started ? <PortfolioPage /> : <StartPage onStart={() => setStarted(true)} />}
    </div>
  );
}

export default App;
