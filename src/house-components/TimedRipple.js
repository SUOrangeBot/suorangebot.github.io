import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

const RippleCircle = styled(CircleIcon)(({ theme, color }) => ({
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0,
  width: '100%',
  height: '100%',
  background: color,
  animation: 'timedRipple 1s infinite',
  '@keyframes timedRipple': {
    '0%': {
      transform: 'scale(0)',
      opacity: 1,
    },
    '80%': {
      transform: 'scale(1.5)',
      opacity: 0,
    },
    '100%': {
      opacity: 0,
    },
  },
}));

const TimedRipple = ({ interval = 3000, color = 'rgba(0, 0, 0, 0.5)', isInsFeedVisible }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, isInsFeedVisible]);

  return visible ? <RippleCircle color={color} /> : null;
};

export default TimedRipple;
