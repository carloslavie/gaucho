import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Container, ButtonNav } from "./styles";

const navFeatures = [
  { name: "knifes", url: "knifes" },
  { name: "mates", url: "mates" },
  { name: "aboutus", url: "about" },
];
const Nav = ({ tabsNav, setTabsNav }) => {
  const { t } = useTranslation("home");
  return (
    <Container>
      {navFeatures.map((item, index) => (
        <ButtonNav
          key={index}
          tab={item.name}
          tabsNav={tabsNav}
          onClick={() => setTabsNav(`${item.name}`)}
        >
          {t(`nav.${item.name}`).toUpperCase()}
        </ButtonNav>
      ))}
    </Container>
  );
};

export default Nav;
