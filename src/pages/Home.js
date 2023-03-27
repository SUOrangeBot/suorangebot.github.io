import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import robotImage from "../images/2022body.png";
import { Link } from "react-router-dom";
import { useTheme } from 'styled-components';
import { styled } from '@mui/system';

const HighlightedButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.su_orange.main,
    borderColor: theme.palette.su_orange.main,
    color: 'white',
  }
}));

function Home () {

  var theme = useTheme();

  return (
    <div style={{
        height: "100%",
        backgroundImage: `url(${robotImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: "true",
        backgroundPosition: "center",
      }}>
        <Container maxWidth="md"
          style={{
            height: "85vh",
            paddingTop: "20vh",
          }}
        >
          
          <Typography variant="h1"
            sx={
              {
                // color: 'white',
                textAlign: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
              }
            }
            color="primary"
          >
            Syracuse University Orange Robotics
          </Typography>
          <Typography variant="h5">
            
            
          </Typography>
            <HighlightedButton 
              size="large"
              variant='outlined'
              component={Link}
              to={'/AboutUs'}
            >About Us</HighlightedButton>

        </Container>
      </div>
  )
}

export default Home