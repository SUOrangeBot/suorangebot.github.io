import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import ORButton from './ORButton';

import logo from "../images/logo2.png";

const pages = ['AboutUs', 'Team', 'Robots', 'Apply'];

const ResponsiveAppBar = (props) => {
  
  const theme = useTheme();

  return (
    <AppBar
      style={{
        backgroundColor: 'white',
        boxShadow: 'none',
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton onClick={() => props.setPage('Home')}>
            <Link to={'/'}>
              <img
                style={{
                  width: '40px',
                  height: '40px',
                }}
                src={logo}
                alt={"OR"}
                loading="lazy"
              />
            </Link>
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            <Typography variant="h6" noWrap onClick={() => props.setPage('Home')}>
              <Link
                to={'/'}
                style={{
                  textDecoration: 'none',
                  color: '#000e54',
                }}
              >
                Orange Robotics
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                to={`/${page}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                <ORButton
                  page={page}
                  setPage={props.setPage}
                  highlighted={page === 'AboutUs'}
                />
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
