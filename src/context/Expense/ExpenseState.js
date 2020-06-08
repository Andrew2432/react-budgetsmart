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
  REMOVE_TOAST_MODE,
} from '../types';

const ExpenseState = (props) => {
  const initialState = {
    expenses: [],
    currentExpense: null,
    totalExpense: 0,
    mode: 'add',
    toastMode: null,
  };
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  /**
   * Generate a DateTime string
   */
  const generateTimestamp = () =>
    new Date().toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

  /**
   * Get data from local storage.
   * Triggered on every render.
   */
  const fetchDataFromStorage = () => {
    dispatch({ type: FETCH_DATA_FROM_LOCAL_STORAGE });
    dispatch({ type: COMPUTE_TOTAL_EXPENSE });
  };

  /**
   * Generate and add an expense
   * @param {string} expense The expense name
   * @param {number} cost The expense cost
   */
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

  /**
   * Set mode to edit.
   * @param {string} id The id of the expense to be updated
   */
  const editExpense = (id) => {
    dispatch({
      type: EDIT_EXPENSE,
      payload: id,
    });
  };

  /**
   * Update the current expense
   * @param {string} name The new expense name
   * @param {cost} cost The new expense cost
   */
  const updateExpense = (name, cost) => {
    dispatch({
      type: UPDATE_EXPENSE,
      payload: { name, cost },
    });

    dispatch({
      type: COMPUTE_TOTAL_EXPENSE,
    });
  };

  /**
   * Delete the current expense
   * @param {*} id The id of expense to be deleted
   */
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

  /**
   * Clear all expenses from local storage.
   * Reset app state.
   */
  const clearAllExpense = () => {
    dispatch({ type: CLEAR_ALL_EXPENSE });
  };

  /**
   * Set mode to home
   */
  const setHomeState = () => dispatch({ type: SET_HOME_STATE });

  /**
   * Disable toast mode
   */
  const removeToastMode = () => dispatch({ type: REMOVE_TOAST_MODE });

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        currentExpense: state.currentExpense,
        totalExpense: state.totalExpense,
        mode: state.mode,
        toastMode: state.toastMode,
        addExpense,
        editExpense,
        clearAllExpense,
        updateExpense,
        deleteExpense,
        setHomeState,
        fetchDataFromStorage,
        removeToastMode,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
