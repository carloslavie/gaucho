import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto 8px auto;
  align-items: center;
  justify-content: center;
  @media(min-width: 600px){
    flex-direction: row;
  }
`;

export const ButtonNav = styled.button`
    margin:0 20px;
    border:none;
    font-size: 22px;
    font-weight: ${(p)=> p.tab === p.tabsNav ? '600' : '400'} ;
    background: none ;
    color: ${(p)=> p.tab === p.tabsNav ? '#FFFFFF' : 'gray'} ;
    cursor: pointer;
`;