import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";

const Container= styled.div`
padding: 10px 10px ;
width:100% ;
position: relative;
z-index: 1;
@media(min-width:768px){
  padding: 40px 80px ;
}
`
const Layout = ({ children, tabsNav, setTabsNav }) => {
  return (
    <Container>
      <Header tabsNav={tabsNav} setTabsNav={setTabsNav}/>
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
