import React from 'react';
import { Navbar } from 'react-materialize';

/**
 * Render a header component
 * Caveat: A toggle menu appears for mobile screen
 */
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
      style={{ backgroundColor: '#ba68c8' }}
    ></Navbar>
  );
};

export default Header;
