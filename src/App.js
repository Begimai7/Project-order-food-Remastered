import { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider, useSelector } from 'react-redux';
import './App.css';
import { darkTheme, lightTheme } from './lib/contants/theme';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';

export function AppContent() {
  const themeMode = useSelector((state) => state.theme.themeMode);

  const theme = useMemo(() => {
    const currentTheme = themeMode === 'light' ? { ...lightTheme } : { ...darkTheme };

    return createTheme(currentTheme);
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
