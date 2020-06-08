import TestRenderer from 'react-test-renderer';
import React from 'react';
import ExpenseItem from '../ExpenseItem';
import ToastContext from '../../../../../context/Toasts/ToastContext';
import ExpenseContext from '../../../../../context/Expense/expenseContext';

describe('AddExpense component', () => {
  test('Renders correctly', () => {
    const expenseItem = new TestRenderer.create(
      (
        <ExpenseContext.Provider value={{ expenses: [] }}>
          <ToastContext.Provider value={{ messages: [] }}>
            <ExpenseItem />
          </ToastContext.Provider>
        </ExpenseContext.Provider>
      )
    );
    expect(expenseItem).toMatchSnapshot();
  });
});
