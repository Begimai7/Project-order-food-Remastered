import StyledComponents from "styled-components"
import { Button as MuiButton, styled } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BasketButton } from "./basketButton/BasketButton"
import { useState } from "react"
import { Basket } from "../basket/Basket"


export const Header = ({openBasket}) => {



const themeMode = useSelector((state) => state.theme.themeMode)

 return (
   <>
   <HeaderContainer>
     <Logo to='/'>ReactMeals</Logo>


     <HeaderActions>
      <BasketButton onClick={openBasket}/>
      <Button>
       {
        themeMode === 'light' ? "dark" : "light"
       }
      </Button>
     </HeaderActions>
   
    
   </HeaderContainer>
   </>
 )
}

const HeaderContainer = styled('div')(({theme}) => ({
  position: "fixed",
  top: '0',
  zIndex: '1',
  background: theme.palette.primary.main,
  width: "100%",
  height: "101px",
  padding: "0 120px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: '#000'
}))
const Logo = StyledComponents(Link)`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #FFFFFF;
  text-decoration: none;
`
const Button = styled(MuiButton)(({theme}) => ({
  backgroundColor: 'red'
}))

const HeaderActions = styled('div')(()=> ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 400
}))