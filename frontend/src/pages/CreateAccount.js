import React from 'react'
import '../styles/CreateAccount.css'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
   return (
      <div className="account">
         <Link to='/'>
            <button id="back-button">Back</button>
         </Link>
         <button id="sign-in">Sign In</button>
         <form>
            <h1>Create Account</h1>
            <label for="name">Name</label><br/>
            <input type="text" id="name" name="name" required/><br/>
            <label for="email">Email</label><br/>
            <input type="email" id="email" name="email" required/><br/>
            <label for="password">Password</label><br/>
            <input type="password" id="password" name="password" required/><br/>
            <input type="submit" value="Create Account" /> 
         </form>
      </div>
   )
}

export default CreateAccount