import React from 'react';
import styled from 'styled-components'
import { editUser } from '../../../Services/api-helper'

const Container = styled.div`
    &:hover{cursor: pointer; }
  `;
const AddButton = styled.div`
    background-color: #52e3c2;
    padding: 15px;
    width: 20%;
    text-align: center;
    border-radius: 2px;
    
  `
const RemoveButton = styled.div`
`

const AddToWatchlistButton = props => {


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
      <Container>
        {
          props.currentUser.watchlist.find(ele => ele === props.pageSymbol) ?
            <RemoveButton>
              Remove from Watchlist
            </RemoveButton>
            :
            <AddButton onClick={() => AddToUserWatchlist(props.pageSymbol.toUpperCase())}>
              Add To Watchlist
    </AddButton>
        }
      </Container >
    }
  </>
  )

}

export default AddToWatchlistButton;