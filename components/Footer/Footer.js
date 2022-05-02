import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  color: #ffffff;
  padding: 0;
  text-align: center;
  min-height:100px ;
  font-size: 12px;
  color: #ffffff;
  opacity: 0.5;
  display: flex ;
  flex-direction: column ;
  align-items: center;
  justify-content: flex-end;
  p{
    height:100% ;
    font-family: Arial, Helvetica, sans-serif;
    margin:0 ;
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #FFFFFF;
  opacity: 0.5;
  margin-bottom: 10px;
`

const Footer = () => {
  return <Container>
    <Divider/>
    <p>This is a Carlos Lavié design and production. All rights reserved. 2022 ©</p>
  </Container>;
};

export default Footer;
