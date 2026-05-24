import React, { useEffect, useState } from 'react';
import TimeDisplay from './TimeDisplay.jsx';
import Controls from './Controls.jsx';
import '../styles/stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, '0');

    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, '0');

    const milliseconds = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <TimeDisplay time={formatTime()} />

      <Controls
        onStart={() => setRunning(true)}
        onPause={() => setRunning(false)}
        onReset={() => {
          setRunning(false);
          setTime(0);
        }}
      />
    </div>
  );
}

export default Stopwatch;
