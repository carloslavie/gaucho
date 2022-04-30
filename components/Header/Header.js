import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  background: black;
  color: #ffffff;
  padding: 20px 0 0 0;
  text-align: center;
`;
const Title = styled.p`
  width: 100%;
  background: black;
  color: rgb(180, 53, 36);
  padding: 0 0 50px 0;
  margin: 0;
  font-size: 100px;
  line-height: 0.5;
  font-weight: 800;
`;
const Subtitle = styled.p`
  width: 100%;
  background: black;
  color: rgb(180, 53, 36);
  padding: 0 0 30px 0;
  margin: 0px;
  font-weight: 200;
  font-size: 24px;
`;
const WrapImg = styled.div`
  width: 100%;
  background: black;
  padding: 0 ;
  margin: 0;
`;

const Header = () => {
  return (
    <>
      <Container>
        <Image src={"/images/Gaucho.png"} alt="hero" width={120} height={153} />
        <Title>GAUCHO</Title>
        {/* <Subtitle>Herramientas de campo</Subtitle> */}
      </Container>
      <WrapImg>
        <Image src={"/images/hero.png"} alt="hero" width={1920} height={400} />
      </WrapImg>
    </>
  );
};

export default Header;
