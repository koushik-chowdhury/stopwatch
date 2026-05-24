import React, { useEffect, useState } from 'react';
import TimeDisplay from './TimeDisplay.jsx';
import Controls from './Controls.jsx';
import '../styles/timer.css';

function Timer() {
  const [minutesInput, setMinutesInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, timeLeft]);

  const startTimer = () => {
    if (timeLeft > 0) {
      setRunning(true);
    }
  };

  const setTimer = () => {
    const totalSeconds = Number(minutesInput) * 60;

    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, '0');

    const seconds = (timeLeft % 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  return (
    <div className="timer">
      <div className="timer-input">
        <input
          type="number"
          placeholder="Enter minutes"
          value={minutesInput}
          onChange={(e) => setMinutesInput(e.target.value)}
        />

        <button onClick={setTimer}>Set</button>
      </div>

      <TimeDisplay time={formatTime()} />

      <Controls
        onStart={startTimer}
        onPause={() => setRunning(false)}
        onReset={() => {
          setRunning(false);
          setTimeLeft(0);
          setMinutesInput('');
        }}
      />
    </div>
  );
}

export default Timer;
