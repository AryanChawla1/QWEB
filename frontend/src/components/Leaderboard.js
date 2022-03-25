import React from 'react'
import LBEntry from './LBEntry'

const Leaderboard = ({users}) => {
  return (
    <div className="leaderBoard">
      {users.map((user) => (
        <LBEntry key={user.id} field1={user.name} field2={user.steps} field3={user.time}/>
      ))}
    </div>
  )
}

export default Leaderboard