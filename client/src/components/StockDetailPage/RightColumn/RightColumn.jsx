import React from 'react';
import styled from 'styled-components'
import Feed from './Feed'
const RightColumn = props => {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(33% + 1rem);
    border-radius: 15px;
    @media (max-width: 768px) {
    width: 100%;
  }
  `;
  return (
    <Container>
      <Feed symbol={props.symbol} />
    </Container>
  );
}

export default RightColumn;