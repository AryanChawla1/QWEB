import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreateAccount.css'

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      email: email,
      password: password,
      password2: password2
    };

    fetch('http://127.0.0.1:8000/api/v1/users/auth/login/', {
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
          setEmail('');
          setPassword('');
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
          <label htmlFor='email'>Email address:</label> <br />
          <input
            name='email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />{' '}
          <br />
          <label htmlFor='password'>Password:</label> <br />
          <input
            name='password'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
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