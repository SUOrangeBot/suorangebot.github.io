import * as React from 'react';
import './styles/App.css';
import ResponsiveAppBar from './house-components/ResponsiveAppBar';
import Footer from './house-components/Footer';
import { Button, Container, Link, Typography } from '@mui/material';
import { createTheme, ThemeProvider, styled, responsiveFontSizes} from '@mui/material/styles';
// import { ThemeProvider, createTheme, makeStyles, responsiveFontSizes} from '@material-ui/core/styles';

import * as ReactDOM from "react-dom";
import {
  Outlet,
} from "react-router-dom";



var theme = createTheme({
  palette: {
    primary: {
      main: '#000e54',
    },
    secondary: {
      main: '#F76900',
    },
    su_orange: {
      main: '#F76900',
      light: '#FF8E00',
      dark: '#D74100',
      medium: '#FF431B',
    },
    su_blue: {
      main: '#000e54',
      light: '#2B72D7',
      medium: '#203299',
    },
  },

});

theme = responsiveFontSizes(theme);


function App() {
  const [page, setPage] = React.useState('Home');

  return (
    
    <ThemeProvider theme={theme}>

        <div className="App"
          style={{
            backgroundColor: "#F5F5F5",
            height: "100%"
          }}  
        >
          <ResponsiveAppBar
            page={page}
            setPage={setPage}
          />

          <Outlet></Outlet>

          <Footer page={page}/>
        </div>

    </ThemeProvider>
    
  );
}

export default App;
