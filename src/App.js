import * as React from 'react';
import './styles/App.css';
import ResponsiveAppBar from './house-components/ResponsiveAppBar';
import Footer from './house-components/Footer';
import InstagramFeed from './InstagramFeed';
import { Button, Container, Link, Typography } from '@mui/material';
import { createTheme, ThemeProvider, styled, responsiveFontSizes} from '@mui/material/styles';
// import { ThemeProvider, createTheme, makeStyles, responsiveFontSizes} from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useLocation } from 'react-router-dom';

import TimedRipple from './house-components/TimedRipple';
import { useAutoplayRipple } from './custom-hooks/useAutoplayRipple';

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
  const path = useLocation().pathname;
  const [page, setPage] = React.useState('Home');
  const [isInsFeedVisible, setIsInsFeedVisible] = React.useState(false);
  const [latestPostLink, setLatestPostLink] = React.useState("");

  const ripple = useAutoplayRipple(3000);

  // not working
  const handleExtractPostLink = () => {
    const instagramProfileLink = "https://www.instagram.com/suorangerobotics/";
  
    fetch(instagramProfileLink, { mode: 'no-cors' })
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const postLink = doc.querySelector("article a[href^='/p/']");
  
        if (postLink) {
          setLatestPostLink(`https://www.instagram.com${postLink.getAttribute("href")}`);
          // console.log("Latest post link: " + `https://www.instagram.com${postLink.getAttribute("href")}`);
        } else {
          setLatestPostLink("No post link found on the profile page.");
          console.log("No post link found on the profile page.")
        }
      })
      .catch(error => console.error(error));
  };

  const handleClickOutside = () => {
    setIsInsFeedVisible(false);
  };

  React.useEffect(() => {
    handleExtractPostLink();
    // if (page === "AboutUs") {
    //   setIsInsFeedVisible(true);
    // } else {
    //   setIsInsFeedVisible(false);
    // }
  }, [page]);

  // listen for changes in useLocation().pathname
  React.useEffect(() => {
    if (path === "/") {
      setPage("Home");
    } else if (path === "/AboutUs") {
      setPage("AboutUs");
    } else if (path === "/Robots") {
      setPage("Robots");
    } else if (path === "/Team") {
      setPage("Team");
    }
  }, [path]);

  const toggleInsFeedVisibility = () => {
    setIsInsFeedVisible(!isInsFeedVisible);
  }

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

      {/*  instagram feed stuff  */}
      <InstagramFeed 
        isVisible={isInsFeedVisible} 
        latestPostLink={null}
      />

      {isInsFeedVisible && (
        <div
          onClick={handleClickOutside}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 999,
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Make it transparent
          }}
        />
      )}

      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={toggleInsFeedVisibility}
          color="secondary"
          aria-label="toggle instagram feed"
        >
          <InstagramIcon />
          <TimedRipple isInsFeedVisible={isInsFeedVisible} interval={3000} color="secondary" />
        </IconButton>
      </div>

    </ThemeProvider>
    
  );
}

export default App;
