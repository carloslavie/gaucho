import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";

const Container= styled.div`
`
const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
