import React, { Fragment } from 'react';
import AddExpense from './AddExpense';
import TotalExpense from './TotalExpense';
import ExpensesList from './ExpensesList';

const Home = () => {
  return (
    <Fragment>
      <AddExpense />
      <TotalExpense />
      <ExpensesList />
    </Fragment>
  );
};

export default Home;
