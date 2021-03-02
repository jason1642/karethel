import React from 'react';
import styled from 'styled-components'
import RightColumnContainer from './RightColumn/RightColumnContainer.jsx'
import LeftColumnContainer from './LeftColumn/LeftColumnContainer.jsx'


const HomePageContentContainer = props => {

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 29px;
    height: auto;
    @media (max-width: 768px) {
      flex-direction: column;
  }
  `;
  console.log(props)
  return (
    <Container>

      <LeftColumnContainer
        currentUser={props.currentUser} />

      <RightColumnContainer />
    </Container>
  );
}

export default HomePageContentContainer;