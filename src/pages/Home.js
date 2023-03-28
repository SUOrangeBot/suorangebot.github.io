import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import robotImage01 from "../images/landingBackground/landing_01.jpeg";
import robotImage02 from "../images/landingBackground/landing_03.jpeg";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const fadeImages2 = [
  robotImage02,
  robotImage01,
];


const HighlightedButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.su_orange.main,
    borderColor: theme.palette.su_orange.main,
    color: 'white',
  }
}));

const BackgroundImage = ({ image }) => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '85vh',
      zIndex: 0
    }}
  >
    <Fade
      arrows={false}
      style={{
        zIndex: 0,
      }}
    >
      {fadeImages2.map((fadeImage, index) => (
        <div key={index}>
          <img style={{ 
            width: '100%',
            height: '85vh',
            objectFit: 'cover',
            opacity: 0.3,
            alignItems: 'center',
          }} 
          src={fadeImage} 
        />
        </div>
      ))}
    </Fade>

    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      }}
    ></div>
  </div>
);

function Home() {
  var theme = useTheme();

  return (
    <div style={{ position: 'relative' }}>
      <BackgroundImage 
        style={{
          zIndex: 0
        }}
      image={robotImage01} />
      <Container
        maxWidth="lg"
        style={{
          height: '85vh',
          position: 'relative', // add position relative to enable z-index on this component
          zIndex: 1, // set a lower value than the Typography component
        }}
      >
        <Typography
          variant="h1"
          style={{
            textAlign: 'center',
            paddingTop: '24vh',
            paddingBottom: '2vh',
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            zIndex: 2, // set a higher value than the Container component
          }}
        >
          Syracuse University Orange Robotics
        </Typography>

        {/* <Typography variant="h5"></Typography> */}
        <HighlightedButton
          size="large"
          variant="outlined"
          component={Link}
          to={'/AboutUs'}
        >
          About Us
        </HighlightedButton>
      </Container>

    </div>
  );
}

export default Home;
