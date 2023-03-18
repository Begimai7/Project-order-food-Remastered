import { store } from "../../store/store"

export const lightTheme = {
 palette: {
  primary: {
   main: "#BF8700",
   light: "#D4A72C", 
   dark: "#9A6700",
   contrastText: "#fff"
 }, 
  secondary: {
    main: "#4D2D00",
    light:" #3F3F3F", 
    dark: "#3B2300",
    contrastText: "#fff"
  },
  error: {
   main: "#f20a0a",
   light:" #f03333", 
   dark: "#4d0303",
   contrastText: "#fff"
  },
  success: {
   main: "#1ecd14",
   light:" #46e83d", 
   dark: "#095c04",
   contrastText: "#fff"
 }
 },
 typography: {
   fontFamily: "Roboto", 
   fontSize: 14
 }
}

export const darkTheme = {
 palette: {
    primary: {
     main: "#8A2B06",
     light: "#9a4827", 
     dark: "#74280a",
     contrastText: "#fff"
   }, 
   secondary: {
    main: "#39313a",
    light:" #3F3F3F", 
    dark: "#3B2300",
    contrastText: "#fff"
  },
   error: {
    main: "#f20a0a",
    light:" #f03333", 
    dark: "#4d0303",
    contrastText: "#fff"
   },
   success: {
    main: "#1ecd14",
    light:" #46e83d", 
    dark: "#095c04",
    contrastText: "#fff"
   }

 },
   typography: {
     fontFamily: "Roboto", 
     fontSize: 14
   },

}

export const getTheme = () => {
 const currentTheme = store.getState().theme.themeMode

 return currentTheme === 'light' ? lightTheme : darkTheme
}