import React from 'react'
import styled from 'styled-components'
import WatchlistHeader from './MostActiveHeader.jsx'
import TableMain from './TableMain.jsx'



const HomeMyStocksContainer = props => {

  const Container = styled.div`   
    display: block; 
    background-color: #393945;
    margin-bottom : 2rem;
    border-radius: 20px;
    height: auto;
    @media (max-width: 768px) {
      width: 100%;
  }
  `;


  return (
    <Container>
      <WatchlistHeader />
      <TableMain
        currentUser={props.currentUser} />
    </Container>
  )
}

export default HomeMyStocksContainer