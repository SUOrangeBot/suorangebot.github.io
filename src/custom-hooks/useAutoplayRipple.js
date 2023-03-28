// useAutoplayRipple.js
import { useState, useEffect } from 'react';

export const useAutoplayRipple = (timeout = 3000) => {
  const [ripple, setRipple] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipple(true);
      setTimeout(() => setRipple(false), 500);
    }, timeout);

    return () => clearInterval(interval);
  }, [timeout]);

  return ripple;
};
