import React from 'react';
import styled from 'styled-components'
import { editUser } from '../../../Services/api-helper'



const AddToWatchlistButton = props => {
  const Container = styled.div`
    background-color: white;
    padding: 15px;
    width: 20%;
    text-align: center;
    background-color: #52e3c2;
    border-radius: 2px;
    &:hover{
      cursor: pointer;
      
    }
  `;

  const AddToUserWatchlist = async symbol => {
    const theUser = props.currentUser
    console.log(theUser)
    let newArray = theUser.watchlist
    newArray.find(e => e === symbol) === undefined && newArray.push(symbol)

    await editUser(props.currentUser.id, {
      watchlist: newArray.map(e => e)
    })

  }
  return (<>
    {props.currentUser &&
      <Container onClick={() => {
        AddToUserWatchlist(props.pageSymbol)
        // window.location.reload()
      }
      }>
        Add To Watchlist

  </Container >
    }
  </>
  )

}

export default AddToWatchlistButton;