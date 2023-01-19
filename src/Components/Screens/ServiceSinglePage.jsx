import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tick from '../.././images/Vector.svg'
import Header from './Header'

function Service() {
  const [check, setCheck] = useState(false)
  return (
    <>
    <Header />
    <MainContainer>
      <Cover>
        <Heading>Service</Heading>
        <CardContainer>
          <Bottomcontainer to="service-form">
            <Title>Service 1</Title>
          </Bottomcontainer>
          <Bottomcontainer  to="service-form">
            <Title>Service 2</Title>
          </Bottomcontainer>
          <Bottomcontainer to="service-form">
            <Title>Service 3</Title>
          </Bottomcontainer>
          <Bottomcontainer to="service-form">
            <Title>Service 4</Title>
          </Bottomcontainer>
        </CardContainer>
      </Cover>
    </MainContainer>
    </>
  )
}

export default Service
const MainContainer = styled.div`
  height: 90vh;
  padding: 180px 0 0px 0;
  background: #a9dbff75;
`
const Cover = styled.div`
  width: 85%;
  margin: 0 auto;
`
const Heading = styled.h1`
  font-size: 24px;
  margin: 0 0 25px 0;
`
const Bottomcontainer = styled(Link)`
  width: 75%;
  background: #f4f4f4;
  padding: 40px 0;
  border-radius: 7px;
  text-decoration: none;
  color: #000;
text-align: center;
`
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`
const Title = styled.h2`
  font-size: 18px;
  margin: auto;

`
const Description = styled.p`
  color: #8e8e8e;
  font-size: 14px;
  line-height: 20px;
`
const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`
const Checkbox = styled.div`
  margin-right: 10px;
  width: 12px;
  border: 1.5px solid #106f39;
  height: 12px;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
`
const Tick = styled.img`
  display: none;
  width: 100%;
  &.checked {
    display: block;
  }
`
const Content = styled.h1`
  color: #6b6b6b;
  font-size: 16px;
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.div`
  background: #fff;
  border: 1px solid #106f39;
  color: #106f39;
  padding: 7px 40px;
  width: 50px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 700;
  margin-right: 30px;
  cursor: pointer;
`
const ButtonTwo = styled.div`
  background: #106f39;
  border: 1px solid #106f39;
  color: #fff;
  padding: 7px 40px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
