import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import robotImage from "./images/2022body.png";


function Home () {
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
              <Button 
                size="large"
                variant='outlined'
                // onClick={() => setPage('Apply')}
              >We are recruiting! Apply Here!</Button>
            </Container>
          </div>
    )
}

export default Home