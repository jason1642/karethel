import React from 'react';
import styled from 'styled-components'
import RightColumnContainer from './RightColumn/RightColumnContainer.jsx'
import LeftColumnContainer from './LeftColumn/LeftColumnContainer.jsx'

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

const HomePageContentContainer = props => {

  document.title = 'Karethel Finance'

  return (
    <Container>
      {/* Left Column :
       Market Overview, Watchlist Table, Most Active Table */}
      <LeftColumnContainer
        currentUser={props.currentUser} />
      {/* Right Column : 
      News Feed */}
      <RightColumnContainer />
    </Container>
  );
}

export default HomePageContentContainer;