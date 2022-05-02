import React from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";
import useTranslation from 'next-translate/useTranslation'

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;  
`;
const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  width:256px;
  background-color: #0a0a0a;
  padding: 10px;
  border-radius: 15px;
  &:hover{
    background-color: #1e1b1b;
  }
`;
const Name = styled.p`
  padding-top: 20px;
  font-size: 18px;
  font-family: Oswald;
  font-weight: 600;
  margin:0 ;
`;
const Description = styled.p`
  padding-top: 10px;
  font-size: 14px;
  font-weight: 400;
  font-family: Oswald;
  margin:0 ;
`;
const Code = styled.p`
font-size: 12px;
  font-family: Oswald;
`;



const Cards = ({data}) => {

  const {t} = useTranslation('home')

  return (
    <Container>
      {data.map((item, index) => (
        <WrapCard key={index}>
          <Image
            src={`/images/${item.image}`}
            alt="producto"
            width={256}
            height={192}
          />
          <Name>{item.name}</Name>
          <Description>{item.info}</Description>
          <Code>{item.codigo}</Code>
        </WrapCard>
      ))}
    </Container>
  );
};

export default Cards;
