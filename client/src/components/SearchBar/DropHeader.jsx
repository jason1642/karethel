import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const DropHeader = props => {
  const Header = styled.div`
    margin-bottom: 0em;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    display: flex;
    align-content: center;
    justify-content: center;
    /* padding: 0px 8px; */
    text-align: center;
    font-size: 15px;
    color: black;
    border: 1px solid grey;



    align-items: center;
    font-weight: 500;
    text-align: center;
    background-color: #52e3c2;
    color: black;
    border-radius: 3px;
  `;

  return (
    <Header>

      {props.currentUser.username}

    </Header>
  );
}
export default DropHeader