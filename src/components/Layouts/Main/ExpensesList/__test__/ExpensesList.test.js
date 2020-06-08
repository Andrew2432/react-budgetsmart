import TestRenderer from 'react-test-renderer';
import React from 'react';
import ExpensesList from '../ExpensesList';
import ToastContext from '../../../../../context/Toasts/ToastContext';
import ExpenseContext from '../../../../../context/Expense/expenseContext';

describe('AddExpense component', () => {
  test('Renders correctly', () => {
    const expensesList = new TestRenderer.create(
      (
        <ExpenseContext.Provider value={{ expenses: [] }}>
          <ToastContext.Provider value={{ messages: [] }}>
            <ExpensesList />
          </ToastContext.Provider>
        </ExpenseContext.Provider>
      )
    );
    expect(expensesList).toMatchSnapshot();
  });
});
