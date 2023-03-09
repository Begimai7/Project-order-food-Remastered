import React from 'react'
import { Button as MuiButton, styled } from '@mui/material'

export const Button = ({children, ...props}) => {
  return (
   <StyledButton {...props}>{children}</StyledButton>
  )
}
const StyledButton = styled(MuiButton)(({theme})=> ({
 "&":{ 
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    color:  theme.palette.primary.contrastText,
    backgroundColor:  theme.palette.primary.main,
    borderRadius: `20px`,
    padding: "10px 32px",
    display: "flex",
    alignItems: "center",
 },
 "&:hover": {
    background:  theme.palette.primary.dark,
    color:  theme.palette.primary.contrastText
 },
 "&:active": {
    background:  theme.palette.primary.light
 }
 }))