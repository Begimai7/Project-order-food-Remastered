
import React from 'react'
import styled from 'styled-components'
import BackgroundImg from '../../assets/images/summery-background.jpg'
import { SummeryInfoCard } from './SummeryInfoCard'

export const Summery = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImg} alt='summery' />
      <SummeryInfoCard />
    </Container>
  )
}
const Container = styled.div`
height: 527px;
`
const StyledImg = styled.img`
height: 432px;
width: 100%;
`