import React, { useState } from 'react';
import styled from 'styled-components'
import SearchIconSVG from '../../images/searchIcon.svg'
import ToolTip from './ToolTip.jsx'
import InputSearch from './InputSearch'


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





const HomeSearchBar = props => {




  return (
    <InputContainer onSubmit={() => { }}>
      <SearchIcon src={SearchIconSVG} alt='' />

      <InputSearch />

      <ToolTip />
    </InputContainer>
  );
}

export default HomeSearchBar;