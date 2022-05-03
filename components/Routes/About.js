import React from 'react';
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation';

const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media(min-width:768px){
      width: 50% ;
  }
`
const Title = styled.div`
  font-size: 28px;
`
const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #FFFFFF;
  opacity: 0.5;
`
const Text = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 100;
  font-family: Oswald;
  color: gray;
  margin-bottom: 80px;
`
const About = () => {
  const {t} = useTranslation('home')
  return ( 
    <Container>
      <Title>{t('home.concept')}</Title>
      <Divider/>
      <Text>{t('home.concept_description')}</Text>
      <Title>{t('home.products')}</Title>
      <Divider/>
      <Text>{t('home.products_description')}</Text>
    </Container>
   );
}
 
export default About;