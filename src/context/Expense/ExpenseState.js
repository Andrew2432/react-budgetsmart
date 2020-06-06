import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import expenseReducer from './expenseReducer';
import ExpenseContext from './expenseContext';
import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  COMPUTE_TOTAL_EXPENSE,
  UPDATE_EXPENSE,
  CLEAR_ALL_EXPENSE,
} from '../types';

const ExpenseState = (props) => {
  const initialState = {
    expenses: [],
    currentExpense: null,
    totalExpense: 0,
    mode: 'add',
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const { expenses, currentExpense } = state;

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
  };

  const editExpense = (id) => {
    const reqExpense = expenses.filter((expense) => expense.id !== id);

    dispatch({
      type: EDIT_EXPENSE,
      payload: reqExpense[0],
    });
  };

  const updateExpense = (newExpense, newCost) => {
    currentExpense.name = newExpense;
    currentExpense.cost = newCost;
    let replaceIndex;

    expenses.forEach((expense, index) => {
      if (expense.id === currentExpense.id) replaceIndex = index;
    });

    expenses.splice(replaceIndex, 1, currentExpense);

    dispatch({
      type: UPDATE_EXPENSE,
      payload: expenses,
    });

    findTotalExpense();
  };

  const findTotalExpense = () => {
    let total = 0;
    console.log(expenses);
    if (expenses.length > 0) {
      expenses.forEach((expense) => (total += expense.cost));
    }
    dispatch({
      type: COMPUTE_TOTAL_EXPENSE,
      payload: total,
    });
  };

  const clearAllExpense = () => {
    dispatch({ type: CLEAR_ALL_EXPENSE });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        currentExpense: state.currentExpense,
        totalExpense: state.totalExpense,
        mode: state.mode,
        addExpense,
        editExpense,
        clearAllExpense,
        updateExpense,
        findTotalExpense,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
