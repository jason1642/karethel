import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Register from '../Register/Register'
import Login from '../Login/LoginContainer.jsx'
import StockDetailPage from '../StockDetailPage/Container/StockDetailPage.jsx'
import HomePage from '../HomePage/HomePage'
import { Route } from "react-router-dom"
import { loginUser, registerUser, getAllPosts, verifyUser, removeToken } from '../../Services/api-helper';


const Container = props => {


  const Main = styled.div`
  `


  return (
    <Main>

      <Route exact path='/' render={routerProps =>
        <HomePage  {...routerProps} />} />

      <Route exact path='/quote/:symbol' render={routerProps =>
        <StockDetailPage  {...routerProps} />} />

      <Route exact path='/login' render={routerProps =>
        <Login {...routerProps}
          handleLogin={props.handleLogin}
        />} />

      <Route exact path='/register' render={(props) => (
        <Register
          {...props}
          handleRegister={props.handleRegister}
        />
      )} />

    </Main>
  );
}

export default Container;