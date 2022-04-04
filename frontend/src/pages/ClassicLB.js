import React from 'react'
import Leaderboard from '../components/Leaderboard'
import '../styles/ClassicLB.css';
import { Link } from 'react-router-dom';
import helpers from '../helpers';

const ClassicLB = () => {
  const users = []
  for (let i = 0; i < 15; i++) {
    users.push({
      name: "Username",
      steps: i*i+11*i+6,
      time: "00:00:00",
    })
    if (users[i].steps > 99) {
      users[i].steps = 99
    }
  }

  return (
    <div>
      <div className="navbar">
        {helpers.getNavbarElements()}
      </div>
      <div className="smallHeading" id="ClassicLB-heading">Classic Leaderboard</div>
      <div className="ClassicLB-size-sort-btns">
        <button className="button3" style={{backgroundColor: "white", color: "#5D5FEF"}}>3x3</button>
        <button className="button3">4x4</button>
        <button className="button3">5x5</button>
        <button className="button3">6x6</button>
        <button className="button3">7x7</button>
        <button className="button3">8x8</button>
        <button className="button3">9x9</button>
        <button className="button3">10x10</button>
      </div>
      <div id="ClassicLB-LeaderBoard">
        <Leaderboard users={users}></Leaderboard>
      </div>
      <h2 id="ClassicLB-sort-by-text">Sort By:</h2>
      <Link to='/classic'>
          <button id="ClassicLB-back-btn">Back</button>
      </Link>
    </div>
  )
}

export default ClassicLB