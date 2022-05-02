import React from "react";
import styled from "styled-components";
// import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 20px auto 8px auto;
  align-items: center;
  justify-content: center;
`;
// const NavItems = styled.a`
//   margin: 0 10px;
//   font-size: 22px;
//   color: gray;
//   &:active {
//     color: #ffffff;
//   }
// `;
const ButtonNav = styled.button`
    margin:0 20px;
    border:none;
    font-size: 22px;
    font-weight: ${(p)=> p.tab === p.tabsNav ? '600' : '400'} ;
    background: none ;
    color: ${(p)=> p.tab === p.tabsNav ? '#FFFFFF' : 'gray'} ;
    cursor: pointer;
`;

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
        // <Link key={index} href={`/${item.url}`} passHref><NavItems onClick={()=>setTabsNav(`${item.name}`)}>{t(`nav.${item.name}`).toUpperCase()}</NavItems></Link>
      ))}
    </Container>
  );
};

export default Nav;
