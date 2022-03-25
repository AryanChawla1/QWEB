import React, { useState, useEffect} from 'react';

import '../styles/Timer.css';

const Timer = () => {
   const [time, setTime] = useState(0);
   const [isActive, setIsActive] = useState(false);

   function toggle() {
      setIsActive(!isActive)
   }

   function reset() {
      setTime(0);
      setIsActive(false);
   }

   useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setTime(time => time + 1);
        }, 10);
      } else if (!isActive && time !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, time]);

   return (
      <div className="app">
         <div className="time">
            {('0' + (Math.floor(time / 360000))).slice(-2)}:{('0' + (Math.floor(time / 6000) % 60)).slice(-2)}:{('0' + (Math.floor(time / 100) % 60)).slice(-2)}:{('0' + (time%100)).slice(-2)}
         </div>
         <div className="row">
            <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
               {isActive ? 'Pause' : 'Start'}
            </button>
            <button className="button" onClick={reset}>
               Reset
            </button>
         </div>
      </div>
   );
};

export default Timer;