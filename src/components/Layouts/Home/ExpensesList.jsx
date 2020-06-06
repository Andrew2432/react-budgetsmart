import React, { useContext } from 'react';
import { CardPanel, Collection } from 'react-materialize';
import ExpenseItem from './ExpenseItem';
import ExpenseContext from '../../../context/Expense/expenseContext';

const ExpensesList = () => {
  const expenseContext = useContext(ExpenseContext);
  const { expenses } = expenseContext;

  const createExpenseItem = (expense) => (
    <ExpenseItem {...expense} key={expense.id} />
  );

  return (
    <CardPanel className="green darken-1">
      <h4>Your Expenses</h4>
      <Collection className="black-text">
        {expenses.length > 0 ? (
          expenses.map(createExpenseItem)
        ) : (
          <h3>No expenses added. Enter an expense</h3>
        )}
      </Collection>
    </CardPanel>
  );
};

export default ExpensesList;
