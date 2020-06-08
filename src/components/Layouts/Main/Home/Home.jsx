import React, { Fragment, useContext } from 'react';
import AddExpense from '../AddExpense';
import TotalExpense from '../TotalExpense';
import ExpensesList from '../ExpensesList';
import CustomToast from '../../Utils/CustomToast';
import ToastContext from '../../../../context/Toasts/ToastContext';

const Home = () => {
  const toastContext = useContext(ToastContext);
  const { messages } = toastContext;

  /**
   * Maintain app level state for rendering toasts
   */
  return (
    <Fragment>
      <AddExpense />
      <TotalExpense />
      <ExpensesList />
      {messages.length > 0 &&
        messages.map((message, index) => (
          <CustomToast message={message} key={index} />
        ))}
    </Fragment>
  );
};

export default Home;
