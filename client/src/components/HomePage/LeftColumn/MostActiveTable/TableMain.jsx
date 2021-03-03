import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TopTableLabels from './TopTableLabels'
import WatchlistInfo from './MostActive'
import { Link } from 'react-router-dom'
import axios from 'axios'


const HomeMyStocksMain = props => {

  const Container = styled.div`
    padding-bottom: 1rem;

  `;

  const Main = styled.div`
    height: 100%;
    margin-bottom: 2rem;
    display: flex;
    `;
  const StaticLeftColumn = styled.div`
    overflow: hidden;
    width: 150px;
    font-size: 14px;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
  const StaticItem = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    padding: .9rem 0 .9rem 0;
    height: 45px;
    border-bottom: 1px solid grey;
    /* background-color: grey; */
    /* border-radius: 20px; */
  `;

  const Symbol = styled.p`
    display: inline-block;
    background-color: grey;
    border-radius: 5px;
    padding: 4px 6px;
    &:hover{
      background-color: white;
      color: grey;
      cursor: pointer;
    }
  `;
  const OverflowXDiv = styled.div`
    overflow-x: auto;
    scrollbar-color: red yellow;
`;



  const [stockData, setStockData] = useState()
  useEffect(() => {

    const IEX_API_KEY = 'pk_3256652724eb490abdfd234401050f50';

    const fetchStockData = async () => {
      console.log("stirng")
      await axios.get(`https://cloud.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&limit=15&token=${IEX_API_KEY}`).then(v => setStockData(v.data))
    }
    fetchStockData()



  }, [])

  return (
    <Container>
      {stockData &&
        <Main>
          <StaticLeftColumn>
            <StaticItem style={{
              backgroundColor: 'none',
              borderBottom: '1px solid grey',
              justifyContent: 'center',
              padding: '0',
              height: '52px'
            }}>
              Symbol</StaticItem>
            {stockData.map((ele, i) => <StaticItem key={i}>
              <i style={{
                paddingRight: '1rem', color: ele.change > 0 ? '#52e3c2' : '#ff4463'
              }} className="fas fa-circle"></i>


              <Link to={{
                pathname: `/quote/${ele.symbol}`,
                stockData: {
                  ...ele

                }
              }} style={{ color: 'white' }}>

                <Symbol>{ele.symbol}</Symbol>
              </Link>
            </StaticItem>)}


          </StaticLeftColumn>


          <OverflowXDiv className='scrollbar-grey'>
            <TopTableLabels />
            <WatchlistInfo
              // usersWatchlist={usersWatchlist}
              stockData={stockData} />
            {/*  */}
            {/*  */}
            {/*  */}

          </OverflowXDiv>





        </Main>
      }
    </Container>
  )
}

export default HomeMyStocksMain