import React, { useState, useContext, Fragment, useEffect } from 'react';
import ExpenseContext from '../../../context/Expense/expenseContext';
import ToastContext from '../../../context/Toasts/ToastContext';

import { CardPanel, Row, Col, TextInput } from 'react-materialize';
import BtnAddExpense from '../Buttons/BtnAddExpense';
import BtnUpdateExpense from '../Buttons/BtnUpdateExpense';
import BtnBack from '../Buttons/BtnBack';

const AddExpense = () => {
  const expenseContext = useContext(ExpenseContext);
  const toastContext = useContext(ToastContext);

  const {
    addExpense,
    mode,
    currentExpense,
    updateExpense,
    setHomeState,
    fetchDataFromStorage,
  } = expenseContext;

  const { setToast } = toastContext;

  const [expense, setExpense] = useState('');
  const [cost, setCost] = useState('');

  const handleExpense = (e) => setExpense(e.target.value);
  const handleCost = (e) => setCost(e.target.value);

  useEffect(() => {
    if (mode === 'edit') setFields();
    // eslint-disable-next-line
  }, [mode]);

  useEffect(() => {
    fetchDataFromStorage();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.trim() === '' || !parseInt(cost)) {
      setToast({ type: 'error', text: 'Please enter correct expense.' });
    } else {
      addExpense(expense, parseInt(cost));
      clearFields();
      setToast({ type: 'success', text: 'Added successfully' });
    }
  };

  const handleUpdate = () => {
    updateExpense(expense, parseInt(cost));
    clearFields();
  };

  const handleBack = () => {
    clearFields();
    setHomeState();
  };

  const setFields = () => {
    setExpense(currentExpense.name);
    setCost(currentExpense.cost.toString());
  };

  const clearFields = () => {
    setExpense('');
    setCost('');
  };

  return (
    <CardPanel className="deep-purple white-text">
      <h4>Add A New Expense</h4>
      <Row>
        <Col s={8} m={8} l={8}>
          <TextInput
            id="expense"
            label="Expense"
            s={12}
            m={12}
            l={12}
            value={expense}
            onChange={handleExpense}
          />
        </Col>
        <Col s={4} m={4} l={4}>
          <TextInput
            id="cost"
            label="Cost"
            s={12}
            m={12}
            l={12}
            value={cost}
            onChange={handleCost}
          />
        </Col>
      </Row>
      <Row>
        {mode === 'add' && <BtnAddExpense onClick={handleSubmit} />}
        {mode === 'edit' && (
          <Fragment>
            <BtnUpdateExpense onClick={handleUpdate} />
            <BtnBack onClick={handleBack} />
          </Fragment>
        )}
      </Row>
    </CardPanel>
  );
};

export default AddExpense;
