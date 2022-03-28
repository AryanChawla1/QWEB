import React, { useState, useEffect} from 'react';

import '../styles/Timer.css';

const Timer = ({isActive}) => {
   const [time, setTime] = useState(0);
   console.log(isActive)

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
         </div>
      </div>
   );
};

export default Timer;