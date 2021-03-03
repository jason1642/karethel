import React from 'react'
import styled from 'styled-components'
import MarketOverview from './MarketOverview/MarketOverview.jsx'
import WatchlistContainer from './Watchlist.jsx/WatchlistContainer.jsx'
import MostActiveContainer from './MostActiveTable/MostActiveContainer'


const LeftColumnContainer = props => {

  const Container = styled.div`
      display: flex;
      flex-direction: column;
      width: calc(67% - 1rem);

      @media (max-width: 768px) {
        width: 100%;
  }
    `;
  console.log(props)
  return (
    <Container>
      <MarketOverview />
      <WatchlistContainer
        currentUser={props.currentUser}
      />
      <MostActiveContainer />

    </Container>
  );
}

export default LeftColumnContainer;