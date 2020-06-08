import React, { useReducer } from 'react';
import ToastContext from './ToastContext';
import toastReducer from './toastReducer';
import { SET_TOAST, REMOVE_TOAST } from '../types';

const ToastState = (props) => {
  const initialState = {
    messages: [],
  };

  const [state, dispatch] = useReducer(toastReducer, initialState);

  /**
   * Add a toast to state
   * @param {object} toast The toast object
   */
  const setToast = (toast) => {
    dispatch({ type: SET_TOAST, payload: toast });
  };

  /**
   * Remove toasts from state
   */
  const removeToast = () => {
    dispatch({ type: REMOVE_TOAST });
  };

  return (
    <ToastContext.Provider
      value={{
        messages: state.messages,
        setToast,
        removeToast,
      }}
    >
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastState;
