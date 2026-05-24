import React from 'react';

function Controls({ onStart, onPause, onReset }) {
  return (
    <div className="controls">
      <button className="start-btn" onClick={onStart}>
        Start
      </button>

      <button className="pause-btn" onClick={onPause}>
        Pause
      </button>

      <button className="reset-btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Controls;
