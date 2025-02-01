import React, { useState, useEffect } from "react";
import bgImage from "./assets/img1.jpg";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }

  return (
    <div 
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-white text-6xl md:text-8xl font-mono font-bold tracking-widest text-center drop-shadow-lg">
          {formatTime()}
        </h1>
        <div className="mt-4 text-center">
          <p className="text-white text-lg md:text-xl font-sans font-medium tracking-wide">
            {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;