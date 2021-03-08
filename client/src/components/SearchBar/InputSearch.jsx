import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link, Redirect, Route } from 'react-router-dom'
import axios from 'axios'

const Container = styled.form`
  display: inline;
  width: 100%;
`
const SearchBarInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 1.1rem 1rem;
  background-color: inherit;
  border: none;
  font-size: 18px;
  font-weight: 200;
  line-height: 1.15;
  color: white;
  &:focus{
  border: none;
  outline: none;
  }
  &:active{
  border: none;
  }
`

const InputSearch = props => {


  const handleSearchSubmit = async symbol => {
    // API KEY ONE - 
    // const IEX_API_KEY = 'pk_3256652724eb490abdfd234401050f50';

    // API KEY TWO
    const IEX_API_KEY = 'pk_c93669f2ba4f4caab1df2c56cc4ce5fb ';

    await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${IEX_API_KEY}`)
      .then(v => {
        console.log(v)
        setRedirect(true)
        setResponseData(v.data)
      }, (error) => alert(error))

  }
  const redirectWithData = () =>
    // passes stock info from query above into route component
    // through redirects state
    <Redirect to={{
      pathname: `/quote/${input}`,
      state: {
        stockData: responseData
      }
    }}
    />

  const [responseData, setResponseData] = useState()
  const [redirect, setRedirect] = useState(false)
  const [input, setInput] = useState('');
  useEffect(() => {
    setRedirect(false)

  }, [redirect, responseData])
  return (
    <Container onSubmit={e => {
      e.preventDefault()
      handleSearchSubmit(input)
    }
    }>
      {
        redirect &&
        redirectWithData()

      }
      <SearchBarInput
        type='text'
        placeholder='Search a stock symbol...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      // maxLength='50'
      />
    </Container>
  )
}

export default InputSearch;