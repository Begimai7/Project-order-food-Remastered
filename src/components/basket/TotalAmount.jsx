import { styled } from '@mui/material'
import React from 'react'
import styledComponents from 'styled-components'
import { Button } from '../UI/Button'

export const TotalAmount = ({price, onClose, onOrder}) => {

  const closeBtnStyle = {
    background: "#fff",
    color: "#973d19",
    border: "none",
    fontWeight: "bold",

     "&:hover": {
      backgroundColor: "#973d19",
      color: "#fff"
    }
  }

 const orderButton = price > 0 && <Button onClick={onOrder}>Order</Button>

  return (
    <TotalAmountStyled>
 
    <TotalContainer>
    <Label>Total Amount</Label>
    <Price>${price.toFixed(2)}</Price>
    </TotalContainer>

    <StyledButtons>
     <Button style={closeBtnStyle} onClick={onClose}>Close</Button>
     {orderButton}
     </StyledButtons>

    </TotalAmountStyled>
  )
}

const TotalAmountStyled = styledComponents.div`
 margin-top: 20px;
`
const TotalContainer = styledComponents.div`
 display: flex;
 justify-content: space-between;
`
const Label = styledComponents.p`
font-weight: 700;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #222222;
padding: 0;
`
const Price = styled('p')(({ theme})=> ({
  fontWeight: 600,
  fontSize: "22px",
  lineHeight: "33px",
  color: theme.palette.primary.main,
  padding: "0"
}))
const StyledButtons = styledComponents.div`
 display: flex;
 justify-content: flex-end;
 gap: 1rem;
 margin-top: 24px;
`

//    <Button variant="outline" onClick={onClose}>Close</Button>