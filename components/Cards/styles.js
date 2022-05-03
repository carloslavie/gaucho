import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;  
  justify-content: center;
  @media (min-width: 768px){
      justify-content: flex-start;

  }
`;
export const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  width:256px;
  background-color: #0a0a0a;
  padding: 10px;
  border-radius: 15px;
  &:hover{
    background-color: #1e1b1b;
  }
`;
export const Name = styled.p`
  padding-top: 20px;
  font-size: 18px;
  font-family: Oswald;
  font-weight: 600;
  margin:0 ;
`;
export const Description = styled.p`
  padding-top: 10px;
  font-size: 14px;
  font-weight: 400;
  font-family: Oswald;
  margin:0 ;
`;
export const Code = styled.p`
font-size: 12px;
  font-family: Oswald;
`;