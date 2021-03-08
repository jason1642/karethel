import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser, loginUser } from '../../Services/api-helper';
import styled from 'styled-components'


const Input = styled.input`
    /* width: 40%; */
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
   &::before{
     color: white;
   }
    input:-webkit-autofill{
      color: white;
      background-color: #4d505f;
    }
    &:hover{
    }

  `
const Title = styled.h2`
color: white;
font-size: 42px;
font-weight: 400;
margin-bottom: 1rem;
`
const LoginBox = styled.div`
color: white;
margin: 40px auto;
text-align: center;
`;
const LoginLink = styled(Link)`
color: white;
/* text-decoration: none; */
`
const Form = styled.div`
margin: 50px auto;

`
const Container = styled.div`
    display: flex;
    padding: 70px 0;
    margin: 0 auto;
    flex-direction: column;
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
const Register = props => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleChange = e => {
    const { name, value } = e.target;
    name === 'username' ?
      setUsername(value) :
      name === 'password' ?
        setPassword(value) : setEmail(value)

  }
  const handleRegister = async (registerData) => {
    const currentUser1 = await registerUser(registerData);
  }


  return (

    <Container>
      <Form>
        <Title>Sign up.</Title>
        <Input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder='Username'
        />
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder='Email'
        />
        <Input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder='Password'
        />
        <Button
          onClick={async () =>
            await registerUser({ "username": username, "email": email, "password": password })
              .then(async (value) => {
                await loginUser({ "username": username, "password": password })
                props.history.push('/')
                window.location.reload()
              }, (error) => alert(error))
          } >Register</Button>

      </Form >

      <LoginBox>
        Already have an account?
          <LoginLink to='/login'> Log in here</LoginLink>
      </LoginBox>
    </Container>

  )

}

export default Register