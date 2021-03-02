import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DropDownContainer from './DropDownContainer';

const LinkBatch = props => {

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

  const Button = styled.div`


    &:hover{
      cursor: pointer;
    }
  `
  return (
    <>
      <div style={{ flexGrow: .7, display: 'flex' }}></div>
      {/* <StyledLink to=''>HELP</StyledLink>
      <StyledLink to=''>FEEDBACK</StyledLink> */}



      {
        props.currentUser === null ?
          <StyledLink to='/login'>Log In</StyledLink>
          :
          <DropDownContainer handleLogout={props.handleLogout} currentUser={props.currentUser} />

      }
    </>
  );
}

export default LinkBatch;