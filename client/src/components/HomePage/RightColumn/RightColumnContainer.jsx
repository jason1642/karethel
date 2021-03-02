import React from 'react'
import styled from 'styled-components'
import LinkPortfolioNotification from './LinkPortfolioNotification.jsx'
import Feed from './Feed.jsx'

const RightColumnContainer = () => {


  const Container = styled.div`
    display: flex;
    height: 100%;
   
    flex-direction: column;
  `;


  return (
    <Container>
      {/* <LinkPortfolioNotification /> */}
      <Feed />
    </Container>
  );
}

export default RightColumnContainer;