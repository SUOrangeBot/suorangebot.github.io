import { Typography, IconButton } from '@mui/material';
import * as React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub'; // Import GitHub icon

const Footer = ({ ...otherProps }) => {
  return (
    <footer className="footer" style={{
      backgroundColor: '#000e54',
      color: 'white',
      left: 0,
      bottom: 0,
      width: '100wh',
      padding: '1rem',
      paddingTop: '16px',
      textAlign: 'center',
    }}>
      <div className="container">
        <div className="content has-text-centered">
          <Typography variant='body2'>
            Presented by <strong>Syracuse University Orange Robotics</strong>. Hosted on GitHub.
          </Typography>
          <Typography variant='body2' sx={{ mt: 1 }}>
            <IconButton href="mailto:suorangerobotics@gmail.com" style={{ color: 'white', paddingTop: 0, paddingBottom: 0}}>
              <EmailIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/suorangerobotics/" target="_blank" style={{ color: 'white', paddingTop: 0, paddingBottom: 0}}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/OrangeRobotics/" target="_blank" style={{ color: 'white', paddingTop: 0, paddingBottom: 0}}>
              <FacebookIcon />
            </IconButton>
            {/* Add new IconButton with GitHub icon */}
            <IconButton href="https://github.com/su-orange-robotics" target="_blank" style={{ color: 'white', paddingTop: 0, paddingBottom: 0 }}>
              <GitHubIcon />
            </IconButton>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
