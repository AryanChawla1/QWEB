import React from 'react';
import '../styles/splash.css';

const Splash = () => {
   return(
      <div>
         <div className="navbar">
            <button className="accountStuff">Create Account</button>
            <button className="accountStuff">Sign Up</button>
         </div>
         <div className="titleText">TORUS PUZZLE</div>
         <div className="buttonsMainPage">
            <button className="button1" >Daily</button>
            <button className="button1">Classic</button>
         </div>
      </div>
   )
}

export default Splash