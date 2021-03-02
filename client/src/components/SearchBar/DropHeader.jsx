import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


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
  const ProfilePicture = styled.img`
    height: 100%;
    width: 100%;
  `;

  const ImageContainer = styled.div`
    /* border: 1px solid black; */
    /* width: 40px; */
  `;
  const UsernameContainer = styled.div`
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 700;
    padding: 0 10px;
    text-align: center;
    background-color: #52e3c2;
    padding: .7rem 1rem;
    color: black;
    border-radius: 3px;
  `;
  const Icon = styled(FontAwesomeIcon)`
    
    font-size: 25px;
  `;
  return (
    <Header>
      {/* <ImageContainer>
        <ProfilePicture src={props.currentUser.image} alt='' />
      </ImageContainer> */}
      {/* <UsernameContainer> */}
      {props.currentUser.username}
      s
      {/* </UsernameContainer> */}
      {/* <div>
        <Icon icon={faAngleDown} />
      </div> */}
    </Header>
  );
}
export default DropHeader