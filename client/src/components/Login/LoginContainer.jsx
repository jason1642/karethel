import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    padding: 150px 0;
    margin: 0 auto;
  `
const Form = styled.div`
    margin: 50px auto;

  `

const InputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
  `
const Title = styled.h2`
    color: white;
    font-size: 42px;
    font-weight: 400;
    margin-bottom: 1rem;
  `
const Input = styled.input`
    padding: 15px 22px;
    background-color: #4d505f;
    color: white;
    border: none;
    border-radius: 5px;
    margin-right: 15px;
    &:focus{
      outline: none;
      color: white;
    }
  
    input:-webkit-autofill{
      color: white;
      background-color: #4d505f;
    }
   
  `
const Button = styled.div`
  padding: 10px 16px;
  border-radius: 5px;
  text-align: center;
  margin: 25px auto 0;
  background-color: #52e3c2;
  width: calc(50% - 8px);
  margin-bottom: 20px;
  &:hover{
  cursor: pointer;
}
`
const SignupBox = styled.div`
  color: white;
  margin: 40px auto;
  text-align: center;
`;
const SignupLink = styled(Link)`
  color: white;
  /* text-decoration: none; */
`
const LoginContainer = props => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'username' ?
      setUsername(value) :
      name === 'password' ?
        setPassword(value) : console.log('nothing')
  }
  return (
    <Container>
      <Form>
        <Title>Sign in.</Title>
        <InputContainer>
          <Input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder='Username'
          />
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder='Password'
          />

        </InputContainer>
        <Button
          onClick={async (e) => {
            // changes variable from false to true if user has valid log-in information
            await props.handleLogin({ "username": username, "password": password })
              .then((value) => props.history.push('/'), (error) => alert("Incorrect Username or Password."))
            // if user if valid, take user to home page
          }}>Log In</Button>

        <SignupBox>
          New to Karethel Finance?
           {/* <br/> */}
          <SignupLink to='/register'> Sign up here</SignupLink>
        </SignupBox>
      </Form>



    </Container >
  )
}

export default LoginContainer;

