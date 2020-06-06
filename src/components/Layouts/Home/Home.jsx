import React, { Fragment } from 'react';
import AddExpense from './AddExpense';
import TotalExpense from './TotalExpense';

const Home = () => {
  return (
    <Fragment>
      <AddExpense />
      <TotalExpense />
    </Fragment>
  );
};

export default Home;
