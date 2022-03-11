import React from 'react';
import '../styles/splash.css';
import Board from '../components/Board';
import helpers from '../helpers';

const Splash = () => {
   const boardWidth = 500
   const width = 3 //width in tiles
   const tiles = helpers.initTiles(width)

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
         <Board width={width} tiles={tiles} boardWidth={boardWidth} nonFunctional={true}/>
      </div>
   )
}

export default Splash