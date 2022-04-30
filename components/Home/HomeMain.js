import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards/Cards';

const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  background: black;
`

const HomeMain = () => {
  return ( 
    <Container>
      <Cards />
    </Container>
   );
}
 
export default HomeMain;