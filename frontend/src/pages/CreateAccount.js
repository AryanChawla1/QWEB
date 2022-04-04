import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreateAccount.css'

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      password1: password1,
      password2: password2
    };

    fetch('http://127.0.0.1:8000/api/users/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/');
        } else {
          setUsername('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      <Link to='/'>
         <button id="back-button">Back</button>
      </Link>
      <Link to='/sign-in'>
         <button id="sign-in">Sign In</button>
      </Link>
      {loading === false && (
        <form onSubmit={onSubmit}>
           {loading === false && <h1>Create Account</h1>}
           {errors === true && <div className='errorText'>*Error creating account</div>}
          <label htmlFor='username'>Username:</label> <br />
          <input
            name='username'
            type='username'
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
          />{' '}
          <br />
          <label htmlFor='password1'>Password:</label> <br />
          <input
            name='password1'
            type='password'
            value={password1}
            required
            onChange={e => setPassword1(e.target.value)}
          />{' '}
          <div></div>
          <label htmlFor='password2'>Confirm password:</label> <br />
          <input
            name='password2'
            type='password'
            value={password2}
            onChange={e => setPassword2(e.target.value)}
            required
          />{' '}
          <br />
          <input type='submit' value='Create account' />
        </form>
      )}
    </div>
  );
};

export default CreateAccount;