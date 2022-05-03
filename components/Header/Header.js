import React from "react";
import Image from "next/image";
import Nav from "./Nav/Nav";
import { useRouter } from "next/router";
import { Container, FlexHead, WrapTitle, Title1, Title2, Divider, Subtitle, WrapImg } from "./styles";

const Header = ({ tabsNav, setTabsNav }) => {
  const router = useRouter();
  const handleChange = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };
  return (
    <>
      <Container>
        <FlexHead>
          <WrapTitle onClick={() => setTabsNav("home")}>
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={162}
              height={206}
            />
            <div style={{ paddingLeft: "9px" }}>
              <Title1>ACERO</Title1>
              <Title2>GAUCHO</Title2>
            </div>
          </WrapTitle>
          <select onChange={handleChange}>
            {router.locales.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </FlexHead>

        <Nav tabsNav={tabsNav} setTabsNav={setTabsNav} />
        <Divider />
        {/* <Subtitle>Herramientas de campo</Subtitle> */}
      </Container>
      {/* <WrapImg>
        <Image src={"/images/hero.png"} alt="hero" width={162} height={206} />
      </WrapImg> */}
    </>
  );
};

export default Header;
