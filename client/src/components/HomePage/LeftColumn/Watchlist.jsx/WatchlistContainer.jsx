import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import WatchlistHeader from './WatchlistHeader.jsx'
import TableMain from './TableMain.jsx'



const HomeMyStocksContainer = props => {

  const Container = styled.div`   
    display: block; 
    background-color: #393945;
    margin-top: 0.5rem;
    margin-bottom : 1rem;
    border-radius: 20px;
    height: auto;
    @media (max-width: 768px) {
      width: 100%;
  }
  `;
  const NoWatchlistBox = styled.div`
    display: flex;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: #393945;
    align-items: center;
    justify-content: center;
      `;
  const Title = styled.div`
  font-size: 28px;
  /* margin-right: 1rem; */
  font-weight: 400;
  color: #8f94ab;
  `;

  const [currentUser, setCurrentUser] = useState()
  const [watchlist, setWatchlist] = useState()
  useEffect(() => {
    setCurrentUser(props.currentUser)
    currentUser && setWatchlist(currentUser.watchlist)
  }, [props.currentUser])
  console.log(watchlist)
  return (
    <Container>

      {
        currentUser && watchlist &&
        <> {
          watchlist.length > 0
          &&
          <>
            <WatchlistHeader />
            <TableMain
              currentUser={currentUser} />
          </>




        }
          {
            watchlist.length === 0
            &&
            <NoWatchlistBox>
              <Title>No stocks on watchlist</Title>
            </NoWatchlistBox>
          }
        </>
      }

      {/* {
        props.currentUser &&
        props.currentUser.watchlist.length === 0 &&
        <NoWatchlistBox>
          <Title>No stocks on watchlist</Title>
        </NoWatchlistBox>
      } */}



      {
        currentUser === null &&
        <NoWatchlistBox>
          <Title>Log in to create a watchlist</Title>
        </NoWatchlistBox>
      }
    </Container>
  )
}

export default HomeMyStocksContainer