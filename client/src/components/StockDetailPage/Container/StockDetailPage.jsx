import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LeftColumn from '../LeftColumn/LeftColumn.jsx'
import RightColumn from '../RightColumn/RightColumn.jsx'
import axios from 'axios'
import AddToWatchlistButton from './AddToWatchlistButton'

const Container = (props) => {


  const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 768px) {
    flex-direction: column;
  }
  `;

  const Button = styled.button`
    padding: 10px;
    width: 50%;
    font-size: 20px;
  `
  const [stockData, setStockData] = useState()
  const [currentUserWatchlist, setCurrentUserWatchlist] = useState()
  const [pageSymbol, setPageSymbol] = useState()
  useEffect(() => {


    const IEX_API_KEY = 'pk_3256652724eb490abdfd234401050f50';
    const fetchStockData = async () => {
      const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${props.match.params.symbol}/quote?token=${IEX_API_KEY}`)
      setStockData(response.data)
      // console.log(props.match.params.symbol)
    }
    setPageSymbol(props.match.params.symbol)
    props.currentUser
      && setCurrentUserWatchlist(props.currentUser.watchlist)
    console.log(currentUserWatchlist)


    fetchStockData()
  }, [])
  console.log(props.currentUser)
  return (
    <>
      { props.currentUser &&
        <AddToWatchlistButton
          currentUser={props.currentUser}
          pageSymbol={pageSymbol}
        />
      }
      <Container>
        <LeftColumn stockData={stockData} symbol={props.match.params.symbol} />
        <RightColumn symbol={props.match.params.symbol} />
      </Container>
    </>
  );
}

export default Container;