import React from 'react'
import '../styles/SignIn.css'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
   return (
      <div className="account">
         <Link to='/'>
            <button id="back-button">Back</button>
         </Link>
         <form>
            <h1>Sign In</h1>
            <label for="email">Email</label><br/>
            <input type="email" id="email" name="email" autocomplete="email" required/><br/>
            <label for="password">Password</label><br/>
            <input type="password" id="current-password" name="password" autocomplete="current-password" required/><br/>
            <input type="submit" value="Create Account" /> 
         </form>
      </div>
   )
}

export default CreateAccount