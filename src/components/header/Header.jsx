import StyledComponents from "styled-components"
import { Button as MuiButton, styled } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BasketButton } from "./basketButton/BasketButton"
import { themeActions } from "../../store/theme/themeSlice"
import { signOut } from "../../store/auth/authThunk"


export const Header = ({openBasket}) => {
const themeMode = useSelector((state) => state.theme.themeMode)
const isAuthorized = useSelector((state) => state.auth.isAuthorized)
console.log(isAuthorized);
const dispatch = useDispatch() 
const navigate = useNavigate()

const changeThemeHandler = () => {
const theme = themeMode === 'light' ? "dark" : 'light'

  dispatch(themeActions.changeThemeMode(theme))
}

const SignOutPageHandler = () => {
 dispatch(signOut())
//  navigate('/signin')
}
 return (
   <>
   <HeaderContainer>
     <Logo to='/'>ReactMeals</Logo>

     <HeaderActions>
      <BasketButton onClick={openBasket}/>
      <Button onClick={changeThemeHandler}>
       {
        themeMode === 'light' ? "dark" : "light"
       }
      </Button>
     {
      isAuthorized ? 
     ( <Button onClick={SignOutPageHandler}>SignOut</Button>) :
      (<Button onClick={() => navigate('/signin')}>SignIn</Button>)
     }
    
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
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  borderRadius: '26px',
  padding: '5px 10px',

  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  }
}))

const HeaderActions = styled('div')(()=> ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 500
}))