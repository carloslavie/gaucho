import React from "react";
import { Container, WrapCard, Name, Description, Code } from "./styles";
import Image from "next/dist/client/image";
import useTranslation from 'next-translate/useTranslation'

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
