import { useCallback, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider, useSelector, } from 'react-redux';
import './App.css';
import { Header } from './components/header/Header';
import { darkTheme, lightTheme } from './lib/contants/theme';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Summery } from './components/summery/Summery';
import { Basket } from './components/basket/Basket';
import Meals from './components/meals/Meal';

export function AppContent() {
  const {meals, isLoading, error} = useSelector((state)=> state.meals)
  const [isBasketVisible, setBasketVisible] = useState(false)

  const clickHandler = useCallback(() => {
    setBasketVisible((prevS) => !prevS)
  },[isBasketVisible])
  


 const themeMode = useSelector((state)=> state.theme.themeMode)

const theme = useMemo(() => {
  const currentTheme = themeMode === 'light' ? {...lightTheme} :  {...darkTheme}

  return createTheme(currentTheme)
}, [themeMode])


  return (
    <ThemeProvider theme={theme}>
        <Header openBasket={clickHandler}/>
        {
          isBasketVisible && <Basket onClose={clickHandler}/>
        }
        <Summery />
        <Meals meals={meals} isLoading={isLoading} error={error}/>
    </ThemeProvider>
   
  );
}

const App = () => {
  return(
     <Provider store={store}>
      <BrowserRouter>
         <AppContent />
      </BrowserRouter>
     </Provider>
  )
}

export default App;
