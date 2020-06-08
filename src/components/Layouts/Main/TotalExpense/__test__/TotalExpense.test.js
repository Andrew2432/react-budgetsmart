import TestRenderer from 'react-test-renderer';
import React from 'react';
import TotalExpense from '../TotalExpense';
import ToastContext from '../../../../../context/Toasts/ToastContext';
import ExpenseContext from '../../../../../context/Expense/expenseContext';

describe('AddExpense component', () => {
  test('Renders correctly', () => {
    const totalExpense = new TestRenderer.create(
      (
        <ExpenseContext.Provider value={{ expenses: [] }}>
          <ToastContext.Provider value={{ messages: [] }}>
            <TotalExpense />
          </ToastContext.Provider>
        </ExpenseContext.Provider>
      )
    );
    expect(totalExpense).toMatchSnapshot();
  });
});
