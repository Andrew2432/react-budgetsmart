import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import expenseReducer from './expenseReducer';
import ExpenseContext from './expenseContext';
import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
  COMPUTE_TOTAL_EXPENSE,
  CLEAR_ALL_EXPENSE,
  SET_HOME_STATE,
  DELETE_EXPENSE,
  FETCH_DATA_FROM_LOCAL_STORAGE,
} from '../types';

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

  const fetchDataFromStorage = () => {
    dispatch({ type: FETCH_DATA_FROM_LOCAL_STORAGE });
    dispatch({ type: COMPUTE_TOTAL_EXPENSE });
  };

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
    });
  };

  const editExpense = (id) => {
    dispatch({
      type: EDIT_EXPENSE,
      payload: id,
    });
  };

  const updateExpense = (name, cost) => {
    dispatch({
      type: UPDATE_EXPENSE,
      payload: { name, cost },
    });

    dispatch({
      type: COMPUTE_TOTAL_EXPENSE,
    });
  };

  const deleteExpense = (id) => {
    const res = window.confirm('Are you sure you want to delete?');

    if (res) {
      dispatch({
        type: DELETE_EXPENSE,
        payload: id,
      });

      dispatch({ type: COMPUTE_TOTAL_EXPENSE });
    }
  };

  const clearAllExpense = () => {
    dispatch({ type: CLEAR_ALL_EXPENSE });
  };

  const setHomeState = () => dispatch({ type: SET_HOME_STATE });

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
        deleteExpense,
        setHomeState,
        fetchDataFromStorage,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
