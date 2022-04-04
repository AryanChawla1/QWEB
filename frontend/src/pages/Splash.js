import React from 'react';
import '../styles/Splash.css';
import Board from '../components/Board';
import helpers from '../helpers';
import { Link } from 'react-router-dom';

const Splash = () => {
   const boardWidth = 500
   const width = 3
   const tiles = helpers.initTiles(width)

   let navbarElements = null;
   if (localStorage.getItem('token') === null) {
      navbarElements = (
         <div>
            <Link to='/create-account'>
               <button className="accountStuff">Create Account</button>
            </Link>
            <Link to='/sign-in'>
            <button className="accountStuff">Sign In</button>
            </Link>
         </div>
      )
   }
   else {
      navbarElements = (
         <div>
            <p>user: {localStorage.getItem('username')}</p>
            <Link to='/'>
               <button className="accountStuff" onClick={() => helpers.logOut()}>Log Out</button>
            </Link>
         </div>
      )
   }

   return(
      <div>
         <div className="navbar">
            {navbarElements}
         </div>
         <div className="titleText">TORUS PUZZLE</div>
         <Link to="/daily">
            <button id="Splash-dailyBtn" className="button1">Daily</button>
         </Link>
         <Link to="/classic">
            <button id="Splash-classicBtn" className="button1">Classic</button>
         </Link>
         <div id="Splash-board" className='board'>
            <Board width={width} tiles={tiles} boardWidth={boardWidth} nonInteractable={true}/>
         </div>
      </div>
   )
}

export default Splash