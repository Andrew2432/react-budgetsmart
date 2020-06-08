import TestRenderer from 'react-test-renderer';
import React from 'react';
import AddExpense from '../AddExpense';
import ToastContext from '../../../../../context/Toasts/ToastContext';
import ExpenseContext from '../../../../../context/Expense/expenseContext';

describe('AddExpense component', () => {
  test('Renders correctly', () => {
    const addExpense = new TestRenderer.create(
      (
        <ExpenseContext.Provider value={{ expenses: [] }}>
          <ToastContext.Provider value={{ messages: [] }}>
            <AddExpense />
          </ToastContext.Provider>
        </ExpenseContext.Provider>
      )
    );
    expect(addExpense).toMatchSnapshot();
  });
});
