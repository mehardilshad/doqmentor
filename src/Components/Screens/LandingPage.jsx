import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Service from './Service'

function LandingPage() {
  return (
    <Cover>
      <Header />
      {/* <TermsAndConditions/> */}
      <Service />
    </Cover>
  )
}

export default LandingPage

const Cover = styled.div `
  /* height: 100vh;
  background: #d8efff; */

`;