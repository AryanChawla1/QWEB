//Todo:
//Have tile sliding be continuous instead of one move at a time
//Add Rest of pages
//Add Timer
//Move splash page buttons down a little

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Classic.css';

import Board from '../components/Board';
import Timer from '../components/Timer';
import helpers from '../helpers';

const {useEffect} = React;

const Modal = ({ onRequestClose }) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}
		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<div className="modal__backdrop">
			<div className="modal__container">
        <button type="button" class="btn-close close-btn" aria-label="Close" onClick={onRequestClose}>x</button>
				<p className="modalText">Time Elapsed</p>
        <p className="modalText">00:00:00:00</p>
				<p className="modalText">Would you like to <br /> submit your score?</p>
				<p></p>
				<button type="button" className="modalButton">
					Sign In
				</button>
			</div>
		</div>
	);
};

const Classic = () => {
  const boardWidth = 500
  const [width, setWidth] = useState(3) //width in tiles
  const [tiles, setTiles] = useState(() => helpers.initTiles(width))
  const [completedBoard, setCompletedBoard] = useState([])

  const [isModalOpen, setModalIsOpen] = useState(false);
	
	console.log(useState("hello")[1])
	const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

  return (
    
    <div>
      {isModalOpen && <Modal onRequestClose={toggleModal} />}
      <div className="navbar">
        <Link to='/create-account'>
          <button className="accountStuff">Create Account</button>
        </Link>
        <Link to='/sign-in'>
          <button className="accountStuff">Sign In</button>
        </Link>
      </div>
      <button onClick={toggleModal} type="button">
				Show the modal
			</button>
      <Link to='/VSBot'><button>VS Bot</button></Link>
      <Link to='/classic/leaderboard'><button>Leaderboard</button></Link>
      <button id="Classic-startBtn" className="button1" onClick={() => helpers.shuffleTiles(width, setCompletedBoard, setTiles)}>Start</button>
      <div id="Classic-board" className="board">
        <Board width={width} tiles={tiles} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTiles}/>
      </div>
        <Timer />
      <div id="Classic-boardSizeBtns">
        <button className="button2" onClick={() => helpers.decWidth(width, setWidth, setTiles, setCompletedBoard)}>-</button>
        &nbsp;&nbsp;Board Size&nbsp;&nbsp;
        <button className="button2" onClick={() => helpers.incWidth(width, setWidth, setTiles, setCompletedBoard)}>+</button>
      </div>  
    </div>
    
  )
}


export default Classic


//console.log(JSON.parse(JSON.stringify(object)))