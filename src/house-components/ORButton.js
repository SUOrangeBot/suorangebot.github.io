import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const HighlightedButton = styled(Button)(({ theme, highlighted }) => ({
    margin: '0px 10px',
    borderColor: highlighted ? theme.palette.su_orange.main : 'transparent',
    '&:hover': {
      borderColor: highlighted ? theme.palette.secondary.dark : 'default',
      backgroundColor: highlighted ? theme.palette.su_orange.main : 'default',
      color: highlighted ? 'white' : 'default',
    },
}));


var typeDefaultProps = {
    highlighted: false,
};

const ORButton = ({ page, setPage, highlighted }) => {
  return (
    <HighlightedButton
        variant="outlined"
        key={page}
        sx={{
          my: 2,
          display: 'block',
        }}
        onClick={() => setPage(page)}
        highlighted={highlighted}
      >
        {page}
      </HighlightedButton>
  );
};

export default ORButton;
