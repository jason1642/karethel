import React, { useState } from 'react';
import styled from 'styled-components'
import SearchIconSVG from '../../images/searchIcon.svg'
import ToolTip from './ToolTip.jsx'
import { Redirect, Route, useParams } from 'react-router-dom'



const InputContainer = styled.div`
display: flex;
align-items: center;
border-radius: 20px;
padding-left: 3rem;
background-color: #393945;
margin: 14px auto 1.5rem auto;
width: 95%;
&:hover{
  background-color:#40424f;
}`;

const SearchIcon = styled.img`
height: 18px;
width: 18px;
`;

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
`;



const HomeSearchBar = props => {




  const [input, setInput] = useState('exmaple12');

  console.log(props.match.params)
  return (
    <InputContainer>
      <SearchIcon src={SearchIconSVG} alt='' />
      <SearchBarInput
        type='text'
        placeholder='Search...'
      // value={} 

      />
      <ToolTip />
    </InputContainer>
  );
}

export default HomeSearchBar;