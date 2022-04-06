import React from 'react'
import Leaderboard from '../components/Leaderboard'
import '../styles/DailyLB.css';
import { Link } from 'react-router-dom';
import helpers from '../helpers';

const DailyLB = () => {
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
      <Link to='/'>
         <button id="back-button">Back</button>
      </Link>
      <div className="navbar">
        {helpers.getNavbarElements()}
      </div>
      <div className="DailyLB-LeaderBoard">
        <Leaderboard users={users}></Leaderboard>
      </div>
    </div>
  )
}

export default DailyLB