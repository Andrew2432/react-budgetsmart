import React from 'react';
import { Navbar } from 'react-materialize';

const Header = () => {
  return (
    <Navbar
      brand={
        <a className="brand-logo" href="/">
          BudgetSmart
        </a>
      }
      centerLogo
      id="mobile-nav"
      style={{ backgroundColor: '#9c27b0' }}
    ></Navbar>
  );
};

export default Header;
