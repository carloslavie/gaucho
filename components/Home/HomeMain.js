import React from "react";
import styled from "styled-components";
import Knifes from "../Routes/Kinfes";
import Mates from "../Routes/Mates";
import MainPage from "../Routes/MainPage";
import About from "../Routes/About";




const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const HomeMain = ({tabsNav, setTabsNav}) => {
  return (
      
      <Container>
        {tabsNav === "home" && <MainPage />}
        {tabsNav === "knifes" && <Knifes/>}
        {tabsNav === "mates" && <Mates/>}
        {tabsNav === "aboutus" && <About/>}
      </Container>
  );
};

export default HomeMain;
