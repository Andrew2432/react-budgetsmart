import React, { useContext } from 'react';
import ExpenseContext from '../../../context/Expense/expenseContext';
import { CardPanel } from 'react-materialize';

const TotalExpense = () => {
  const expenseContext = useContext(ExpenseContext);
  const { totalExpense } = expenseContext;

  return (
    <CardPanel
      className="deep-orange darken-1 white-text"
      style={{ textAlign: 'center' }}
    >
      <h4>Total expense</h4>
      <h4>Rs. {totalExpense}</h4>
    </CardPanel>
  );
};

export default TotalExpense;
