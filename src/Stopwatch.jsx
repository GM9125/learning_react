import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stopwatch.css'; // Custom CSS file for additional styling

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalIdRef.current);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  const start = () => !isRunning && setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => { setElapsedTime(0); setIsRunning(false); };

  const formatTime = () => {
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-card">
        {/* Glowing border effect */}
        <div className={`card-border ${isRunning ? 'active' : ''}`}></div>
        
        <div className="card-content">
          <h1 className="display-title">TIME FLIES</h1>
          
          {/* Animated time display */}
          <div className={`time-display ${isRunning ? 'pulse' : ''}`}>
            <div className="digital-gradient">
              {formatTime().split(':').map((part, i) => (
                <React.Fragment key={i}>
                  <span className="time-part">{part}</span>
                  {i < 2 && <span className="time-separator">:</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="progress-ring">
              <svg>
                <circle className="ring-back" cx="60" cy="60" r="52"/>
                <circle 
                  className="ring-front"
                  cx="60" cy="60" r="52"
                  style={{ strokeDashoffset: 314 - (314 * (elapsedTime % 1000)) / 1000 }}
                />
              </svg>
            </div>
          </div>

          {/* Holographic control buttons */}
          <div className="controls">
            <button 
              onClick={start}
              disabled={isRunning}
              className="control-btn start-btn"
            >
              <span className="btn-gradient"></span>
              <span className="btn-text">START</span>
            </button>
            
            <button 
              onClick={stop}
              disabled={!isRunning}
              className="control-btn stop-btn"
            >
              <span className="btn-gradient"></span>
              <span className="btn-text">STOP</span>
            </button>
            
            <button 
              onClick={reset}
              className="control-btn reset-btn"
            >
              <span className="btn-gradient"></span>
              <span className="btn-text">RESET</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;