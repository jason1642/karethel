import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LoginContainer = props => {
  const Container = styled.div`
  
  `

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    name === 'username' ?
      setUsername(value) :
      name === 'password' ?
        setPassword(value) : console.log('nothing')
    console.log(username, password)
  }

  return (
    <div className='login-page-container'>
      {console.log(props)}
      <form className='login-form' onSubmit={async (e) => {
        e.preventDefault();
        console.log(props)
        // changes variable from false to true if user has valid log-in information
        await props.handleLogin({ "username": username, "password": password }).then((value) => props.history.push('/'), (error) => alert("Error"))
        // if user if valid, take user to home page
      }}>
        <h3>Log in</h3>
        <label htmlFor="username"></label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder='Username'
        />
        <br />
        <br />
        <label htmlFor="password"></label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder='Password'
        />
        <br />
        <button className='login-submit-button'>Log In</button>
      </form>
      <p>
        New to Karethel Finance?
      <Link to='/register' className='sign-up-here-link'> Sign up here</Link>
      </p>
    </div>
  )
}

export default LoginContainer;

