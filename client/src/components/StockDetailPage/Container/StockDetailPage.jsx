import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LeftColumn from '../LeftColumn/LeftColumn.jsx'
import RightColumn from '../RightColumn/RightColumn.jsx'
import axios from 'axios'
import AddOrRemoveFromWatchlistButton from './AddOrRemoveFromWatchlistButton'

const Container = (props) => {

  const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 768px) {
    flex-direction: column;
  }
  `;

  const [stockData, setStockData] = useState()
  const [currentUserWatchlist, setCurrentUserWatchlist] = useState()
  const [pageSymbol, setPageSymbol] = useState()
  useEffect(() => {


    // API KEY ONE - 
    // const IEX_API_KEY = 'pk_3256652724eb490abdfd234401050f50';

    // API KEY TWO
    const IEX_API_KEY = 'pk_c93669f2ba4f4caab1df2c56cc4ce5fb ';
    const fetchStockData = async () => {
      const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${props.match.params.symbol}/quote?token=${IEX_API_KEY}`)
      setStockData(response.data)
      // set page title within fetch request function
      document.title = `${response.data.symbol} ${response.data.latestPrice} :  Karethel Finance`
    }
    setPageSymbol(props.match.params.symbol)
    props.currentUser
      && setCurrentUserWatchlist(props.currentUser.watchlist)

    // If data was able to be passed though redirect props, use
    // that data instead. If not, query data through the function, creating another api call
    props.location.state.stockData === undefined ?
      fetchStockData()
      :
      setStockData(props.location.state.stockData)


    // Test whether router props data was used or another api call was made
    // if (props.location.state.stockData === undefined) {
    // console.log("fetch stock data function used")
    // fetchStockData()

    // } else {
    //   setStockData(props.location.state.stockData)
    //   console.log("ROUTER PROPS DATA USED ")
    // }
  }, [props.match.params.symbol])
  console.log(props.location.state)
  return (
    <>

      { props.currentUser &&
        <AddOrRemoveFromWatchlistButton
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