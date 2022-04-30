import React from 'react';
import styled from 'styled-components';
import Image from 'next/dist/client/image';

const Container = styled.div`
margin:0 auto;
width: 100% ;
padding:20px;
display: flex ;
flex-wrap:wrap ;
justify-content: center ;
gap: 1rem;
`


const Cards = () => {
  return ( 
    <Container>
      <Image src={'/images/1.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/2.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/3.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/4.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/5.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/6.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/7.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/8.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/9.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/10.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/11.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/12.jpeg'} alt='producto' width={256} height={192}/>
      <Image src={'/images/13.jpeg'} alt='producto' width={256} height={192}/>
    </Container>
   );
}
 
export default Cards;