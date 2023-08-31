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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import './ResponsiveAppBar.css';


import logo from "../images/logo2.png";

const pages = [{
  name: 'About Us',
  link: 'AboutUs',
}, {
  name: 'Robots',
  link: 'Robots',
}, {
  name: 'Apply',
  link: 'Apply',
}];

const ResponsiveAppBar = (props) => {
  
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Link
                  to={`/${page.link}`}
                  style={{
                    textDecoration: 'none',
                    color: '#000e54',
                  }}
                >
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  {page.name}
                </Link>
              </MenuItem>
            ))}
            <MenuItem key={"Support Us"} onClick={handleCloseNavMenu}>
              <Link
              to={"https://secure.syr.edu/s/1632/17/form/form.aspx?sid=1632&gid=2&pgid=9326&sort=1&bledit=1&dids=1966&appealcode=408614OrangeRobotics&_gl=1*ynjyy0*_ga*MjA0NDc1OTUwMS4xNjkwOTgzNjg4*_ga_QT13NN6N9S*MTY5MzQ0Njg4MC45LjEuMTY5MzQ0Njg5NS40NS4wLjA."}
              style={{
                textDecoration: 'none',
                color: '#000e54',
              }}
              target='_blank'
              >
                Support Us
              </Link>
            </MenuItem>
          </Menu>

          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            <Typography variant="h6" noWrap onClick={() => props.setPage('Home')} 
            >
              <Link
                to={'/'}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
                className='AppBarTitle'
              >
                ORANGE ROBOTICS
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                to={`/${page.link}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                <ORButton
                  page={page.name}
                  setPage={props.setPage}
                  highlighted={page === 'AboutUs'}
                />
              </Link>
            ))}

              <Link
                to={"https://secure.syr.edu/s/1632/17/form/form.aspx?sid=1632&gid=2&pgid=9326&sort=1&bledit=1&dids=1966&appealcode=408614OrangeRobotics&_gl=1*ynjyy0*_ga*MjA0NDc1OTUwMS4xNjkwOTgzNjg4*_ga_QT13NN6N9S*MTY5MzQ0Njg4MC45LjEuMTY5MzQ0Njg5NS40NS4wLjA."}
                style={{
                  textDecoration: 'none',
                }}
                target='_blank'
              >
                <ORButton
                  page={"Support Us"}
                  setPage={props.setPage}
                />
              </Link>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color=""
            >
              <MenuIcon />
            </IconButton>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
