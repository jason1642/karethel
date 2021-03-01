import React from 'react'
import styled from 'styled-components'
import HomeMyStockHeader from './HomeMyStocksHeader.jsx'
import HomeMyStockMain from './HomeMyStocksMain.jsx'



const HomeMyStocksContainer = () => {

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
      <HomeMyStockHeader />
      <HomeMyStockMain />
    </Container>
  )
}

export default HomeMyStocksContainer