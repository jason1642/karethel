import React from 'react';
import styled from 'styled-components'
import Register from '../Register/Register'
import Login from '../Login/LoginContainer.jsx'
import StockDetailPage from '../StockDetailPage/Container/StockDetailPage.jsx'
import HomePage from '../HomePage/HomePage'
import { Route } from "react-router-dom"


const Container = props => {


  const Main = styled.div`
  `

  console.log(props)
  return (
    <Main>

      <Route exact path='/' render={routerProps =>
        <HomePage  {...routerProps}
          currentUser={props.currentUser}
        />} />

      <Route exact path='/quote/:symbol' render={routerProps =>
        <StockDetailPage
          currentUser={props.currentUser}
          {...routerProps} />}
      />

      <Route exact path='/login' render={routerProps =>
        <Login {...routerProps}
          handleLogin={props.handleLogin}
        />} />

      <Route exact path='/register' render={(props) => (
        <Register
          {...props}
          handleLogin={props.handleLogin}
        // handleRegister={props.handleRegister}
        />
      )} />

    </Main>
  );
}

export default Container;