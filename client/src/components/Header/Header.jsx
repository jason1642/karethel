import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import siteLogo from '../../images/siteLogo.png'
import { Link } from 'react-router-dom'
import LinkBatch from './LinkBatch.jsx'
import { push as Menu } from 'react-burger-menu'
import { verifyUser } from '../../Services/api-helper'

const Header = props => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 31px;
    padding: 20px 1.5rem 1rem 2rem;
    background-color: #32323e;
  `;

  const SiteLogo = styled.img`
    height: 100px;
    width: auto;
  `;

  const StyledLink = styled(Link)`
    color: white;
    display: block;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    padding: 6px 0px;
    font-family: Helvetica, Arial, sans-serif;
    &:hover {
    border-bottom: 1px solid #52e3c2;
    margin-top: 1px;
  }
  `;
  const SiteName = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 22px;
  `


  return (
    <Header>
      <SiteName to='/'>Karethel</SiteName>
      {/* {windowWidth <= 768 ? 'X' : <LinkBatch />} */}
      {/* <Menu> */}

      {/* <StyledLink to='/'>HOME</StyledLink> */}
      {/* <StyledLink to='/chat'>CHAT</StyledLink> */}
      {/* <StyledLink to='/portfolio'>WATCHLIST</StyledLink> */}
      <LinkBatch
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      {/* </Menu> */}
    </Header>
  );
}

export default Header;