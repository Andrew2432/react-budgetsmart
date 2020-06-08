import TestRenderer from 'react-test-renderer';
import React from 'react';
import Home from '../Home';
import ToastContext from '../../../../../context/Toasts/ToastContext';
import ExpenseContext from '../../../../../context/Expense/expenseContext';

describe('Home component', () => {
  test('Renders correctly', () => {
    const home = new TestRenderer.create(
      (
        <ExpenseContext.Provider value={{ expenses: [] }}>
          <ToastContext.Provider value={{ messages: [] }}>
            <Home />
          </ToastContext.Provider>
        </ExpenseContext.Provider>
      )
    );
    expect(home).toMatchSnapshot();
  });
});
