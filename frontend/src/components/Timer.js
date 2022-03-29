import React, {useEffect} from 'react';

import '../styles/Timer.css';

const Timer = ({isActive, reset, timeElapsed, setTimeElapsed}) => {

   useEffect(() => {
      if (reset) {
         setTimeElapsed(0)
      }
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setTimeElapsed(timeElapsed => timeElapsed + 1);
        }, 10);
      } else if (!isActive && timeElapsed !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, timeElapsed]);

   return (
      <div className="app">
         <div className="time">
            {('0' + (Math.floor(timeElapsed / 360000))).slice(-2)}:{('0' + (Math.floor(timeElapsed / 6000) % 60)).slice(-2)}:{('0' + (Math.floor(timeElapsed / 100) % 60)).slice(-2)}:{('0' + (timeElapsed%100)).slice(-2)}
         </div>
         <div className="row">
         </div>
      </div>
   );
};

export default Timer;