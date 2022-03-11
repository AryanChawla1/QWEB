import React from 'react'

const CreateAccount = () => {
   return (
      <div>
         <form>
            <label for="name">Name</label><br/>
            <input type="text" id="name" name="name" /><br/>
            <label for="password">Password</label><br/>
            <input type="passowrd" id="password" name="password" /><br/>
            <input type="submit" value="Submit" /> 
         </form>
      </div>
   )
}

export default CreateAccount