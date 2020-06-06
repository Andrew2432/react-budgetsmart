import React from 'react';
import { Box } from '@material-ui/core';

const Header = () => {
  return (
    <Box
      component="header"
      style={{
        width: '100vw',
        backgroundColor: '#ba68c8',
        padding: '0.5rem',
        textAlign: 'center',
        fontSize: '2.1rem',
        fontWeight: '400',
        color: '#fff',
      }}
      className="header"
    >
      BudgetSmart
    </Box>
  );
};

export default Header;
