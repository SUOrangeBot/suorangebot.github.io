import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Outlet, Link } from "react-router-dom";

import logo from "./logo2.png";

const pages = ['Team', 'Robot', 'Apply'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = (props) => {
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
    <AppBar style={{
      backgroundColor: 'white',
      boxShadow: 'none',
    }} position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            onClick={() => props.setPage('Home')}
            // href={'Home'}
          >
          <img
            style={{
              width: '40px',
              height: '40px',
            }}
            src={logo}
            alt={"OR"}
            loading="lazy"
          />
          </IconButton>
          
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            <Typography variant="h6" noWrap
              onClick={() => props.setPage('Home')}
            >
              <a 
                // href={'/Home/'}
                style={{
                  textDecoration: 'none',
                  color: '#000e54',
                }}
              >
              Orange Robtics
              </a>
              
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (

              <Link to={page === 'Home' ? '/Home/' : `/${page}`} style={{
                textDecoration: 'none',
              }}>
                <Button
                  variant='outlined'
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                  onClick={() => props.setPage(page)}
                  // href={page === 'Home' ? '/Home/' : `/Home/${page}`}
                  style={{
                    margin: '0px 10px',
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
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