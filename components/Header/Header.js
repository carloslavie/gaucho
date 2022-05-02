import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import { useRouter } from "next/router";

const Container = styled.div`
  color: #ffffff;
  padding: 0;
  text-align: center;
  height: 320px;
  min-width:100% ;
  width:100% ;
`;
const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
`;
const Title1 = styled.p`
  width: 100%;
  background: black;
  color: rgb(180, 53, 36);
  padding: 0;
  margin: 0;
  font-size: 120px;
  font-weight: 800;
  line-height: 1;
  text-align: left ;
`
const Title2 = styled.p`
  width: 100%;
  background: black;
  color: rgb(180, 53, 36);
  padding: 0;
  margin: 0;
  font-size: 97px;
  font-weight: 800;
  line-height: 1;
  text-align: left ;
`
const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #FFFFFF;
`

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
  padding: 0;
  margin: 0;
`;

const Header = ({tabsNav, setTabsNav}) => {
  return (
    <>
      <Container>
        <WrapTitle onClick={()=>setTabsNav('home')}>
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={162}
            height={206}
          />
          <div style={{paddingLeft:'9px'}}>
            <Title1>ACERO</Title1>
            <Title2>GAUCHO</Title2>
          </div>
        </WrapTitle>
        <button>idioma</button>
        <Nav tabsNav={tabsNav} setTabsNav={setTabsNav}/>
        <Divider/>
        {/* <Subtitle>Herramientas de campo</Subtitle> */}
      </Container>
      {/* <WrapImg>
        <Image src={"/images/hero.png"} alt="hero" width={162} height={206} />
      </WrapImg> */}
    </>
  );
};

export default Header;
