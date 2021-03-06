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

const Modal = ({ onRequestClose, timeElapsed }) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}
		// // Prevent scolling
		// document.body.style.overflow = "hidden";
		// document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

  const signInBtn = (
    <Link to='/sign-in'>
      <p className="modalText">Would you like to <br /> submit your score?</p>
			<p></p>
      <button className="modalButton">Sign In</button>
    </Link>
  )

	return (
		<div className="modal__backdrop">
			<div className="modal__container">
        <button type="button" class="btn-close close-btn" aria-label="Close" onClick={onRequestClose}>x</button>
				<p className="modalText">Time Elapsed</p>
        <p className="modalText">{timeElapsed}</p>
				{(localStorage.getItem('token') === null) ? signInBtn : <div></div>};
			</div>
		</div>
	);
};

const Classic = () => {
  const boardWidth = 500
  const [width, setWidth] = useState(3) //width in tiles
  const [tiles, setTiles] = useState(() => helpers.initTiles(width))
  const [completedBoard, setCompletedBoard] = useState([])

  const [isActive, setActive] = useState(false)
  const [reset, setReset] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isModalOpen, setModalIsOpen] = useState(false);

  const onStartBtnClick = () => {
    helpers.shuffleTiles(width, setCompletedBoard, setTiles)
    toggleActive()
  }

  const toggleActive = () => {
    setReset(false)
    if (isActive) {
      setReset(true)
    }
    setActive(!isActive)
  }
	
	const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
    setTimeElapsed(0);
	};

  if (gameOver) {
    setModalIsOpen(true);
    setGameOver(false);
    setActive(false);
  }

  function setTimeDesign(timeElapsed) {
    var time = ('0' + (Math.floor(timeElapsed / 360000)).toString()).slice(-2) + ":" + 
    ('0' + (Math.floor(timeElapsed / 6000) % 60).toString()).slice(-2) + ":" + 
    ('0' + (Math.floor(timeElapsed / 100) % 60).toString()).slice(-2) + ":" + 
    (('0' + (timeElapsed%100)).toString()).slice(-2)
    return time
  }

  return (
    <div>
      <Link to='/'>
         <button id="back-button">Back</button>
      </Link>
      {isModalOpen && <Modal onRequestClose={toggleModal} timeElapsed={
        setTimeDesign(timeElapsed)
        } />}
      <div className="navbar">
        {helpers.getNavbarElements()}
      </div>
      <button id="Classic-startBtn" className="button1" onClick={() => onStartBtnClick()}>
        {isActive ? 'Reset' : 'Start'}</button>
      <div id="Classic-board" className="board">
        <Board width={width} tiles={tiles} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTiles} setGameOver={setGameOver}/>
      </div>
      <div className="timeElapsedText">Time Elapsed</div>
      <Timer isActive={isActive} reset={reset} timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed}/>
      <Link to='/VSBot'>
          <button id="Classic-VSBotBtn">VS Bot</button>
      </Link>
      <Link to='/classic/leaderboard'>
          <button id="Classic-LeaderboardBtn">Leaderboard</button>
      </Link>
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