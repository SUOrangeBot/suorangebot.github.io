import * as React from 'react';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { Button, Container, Link, Typography } from '@mui/material';
import { createTheme, ThemeProvider, styled, responsiveFontSizes} from '@mui/material/styles';

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
      main: '#ff4081',
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
