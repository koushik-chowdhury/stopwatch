import React, { useState } from 'react';
import Stopwatch from './components/Stopwatch.jsx';
import Timer from './components/Timer.jsx';
import './styles/app.css';

function App() {
  const [activeTab, setActiveTab] = useState('stopwatch');

  return (
    <div className="app">
      <div className="container">
        <h1>{activeTab === 'stopwatch' ? 'StopWatch' : 'Timer'}</h1>

        <div className="tabs">
          <button className={activeTab === 'stopwatch' ? 'active' : ''} onClick={() => setActiveTab('stopwatch')}>
            Stopwatch
          </button>

          <button className={activeTab === 'timer' ? 'active' : ''} onClick={() => setActiveTab('timer')}>
            Timer
          </button>
        </div>

        {activeTab === 'stopwatch' ? <Stopwatch /> : <Timer />}
      </div>
    </div>
  );
}

export default App;
