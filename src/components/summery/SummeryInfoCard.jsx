import { styled } from '@mui/material'
import React from 'react'
import  styledComponents  from 'styled-components'

export const SummeryInfoCard = () => {
  return (
   <Card>
   <StyledTitle>Delicious Food, Delivered To You</StyledTitle>
   <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious
   lunch or dinner at home.</p>
   <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by
    experienced chefs!</p>
 </Card>
  )
}
const Card = styled('div')(({ theme })=> ({
 position: "relative",
  top: "-11rem",
  margin: "0 auto",
  width: "857px",
  background: theme.palette.secondary.main,
  boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.3)",
  borderRadius: "16px",
  padding: "36px 40px 16px 40px",
  color: theme.palette.secondary.contrastText,
  textAlign: "center",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
   
   "p": {
     marginBottom: "20px"
   }
 }))

 const StyledTitle = styledComponents.h1`
 font-weight: 600;
 font-size: 36px;
 line-height: 54px;
 margin-bottom: 28px;
`