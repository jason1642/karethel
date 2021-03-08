import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import WatchlistHeader from './WatchlistHeader.jsx'
import TableMain from './TableMain.jsx'
import { Link } from 'react-router-dom'


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
const LoginButton = styled(Link)`
    color: #ffffff;
    text-decoration: none;
  `

const HomeMyStocksContainer = props => {


  const [currentUser, setCurrentUser] = useState()
  const [watchlist, setWatchlist] = useState()
  useEffect(() => {
    setCurrentUser(props.currentUser)
    currentUser && setWatchlist(currentUser.watchlist)
  }, [props.currentUser, currentUser, watchlist])


  // console.log(watchlist, currentUser)
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
          {/* if watchlist is empty, display 'no stock on watchlist' */}
          {
            watchlist.length === 0
            &&
            <NoWatchlistBox>
              <Title>You have no stocks on your watchlist</Title>
            </NoWatchlistBox>
          }
        </>
      }

      {/* message if no user is logged in */}
      {
        currentUser === null &&
        <NoWatchlistBox>
          <Title><LoginButton to='/login'>Log in</LoginButton> to create a watchlist</Title>
        </NoWatchlistBox>
      }
    </Container>
  )
}

export default HomeMyStocksContainer