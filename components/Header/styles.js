import styled from "styled-components";

export const Container = styled.div`
  color: #ffffff;
  padding: 0;
  text-align: center;
  height: fit-content;
  min-width: 100%;
  width: 100%;
  @media (min-width: 768px){
    height: 320px;
  }
`;
export const FlexHead = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  @media (min-width:768px){
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between ;
  }
`;
export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  @media (min-width:768px){
    flex-direction: row;
  }
`;
export const Title1 = styled.p`
  width: 100%;
  background: black;
  color: rgb(180, 53, 36);
  padding: 0;
  margin: 0;
  font-size: 120px;
  font-weight: 800;
  line-height: 1;
  text-align: left;
`;
export const Title2 = styled.p`
  width: 100%;
  background: black;
  color: rgb(180, 53, 36);
  padding: 0;
  margin: 0;
  font-size: 97px;
  font-weight: 800;
  line-height: 1;
  text-align: left;
`;
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #ffffff;
`;

export const Subtitle = styled.p`
  width: 100%;
  background: black;
  color: rgb(180, 53, 36);
  padding: 0 0 30px 0;
  margin: 0px;
  font-weight: 200;
  font-size: 24px;
`;
export const WrapImg = styled.div`
  width: 100%;
  background: black;
  padding: 0;
  margin: 0;
`;