import React from 'react';
import '../styles/Splash.css';
import Board from '../components/Board';
import helpers from '../helpers';
import { Link } from 'react-router-dom';

const Splash = () => {
   const boardWidth = 500
   const width = 3
   const tiles = helpers.initTiles(width)

   return(
      <div>
         <div className="navbar">
            <button className="accountStuff">Create Account</button>
            <button className="accountStuff">Sign In</button>
         </div>
         <div className="titleText">TORUS PUZZLE</div>
         <Link to="/daily">
            <button id="Splash-dailyBtn" className="button1">Daily</button>
         </Link>
         <Link to="/classic">
            <button id="Splash-classicBtn" className="button1">Classic</button>
         </Link>
         <div id="Splash-board" className='board'>
            <Board width={width} tiles={tiles} boardWidth={boardWidth} nonFunctional={true}/>
         </div>
      </div>
   )
}

export default Splash