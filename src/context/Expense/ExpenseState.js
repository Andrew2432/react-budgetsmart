import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import expenseReducer from './expenseReducer';
import ExpenseContext from './expenseContext';
import { ADD_EXPENSE, COMPUTE_TOTAL_EXPENSE } from '../types';

const ExpenseState = (props) => {
  const initialState = {
    expenses: [],
    currentExpense: null,
    totalExpense: 0,
    mode: 'add',
  };
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const generateTimestamp = () =>
    new Date().toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

  const addExpense = (expense, cost) => {
    const newExpense = {
      id: uuidv4(),
      name: expense,
      cost,
      createdAt: generateTimestamp(),
    };

    dispatch({
      type: ADD_EXPENSE,
      payload: newExpense,
    });

    dispatch({
      type: COMPUTE_TOTAL_EXPENSE,
      payload: newExpense.cost,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        currentExpense: state.currentExpense,
        totalExpense: state.totalExpense,
        mode: state.mode,
        addExpense,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
