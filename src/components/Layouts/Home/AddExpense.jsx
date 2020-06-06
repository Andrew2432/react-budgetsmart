import React, { useState, useContext } from 'react';
import ExpenseContext from '../../../context/Expense/expenseContext';
import {
  CardPanel,
  Row,
  Col,
  Button,
  TextInput,
  Icon,
} from 'react-materialize';

const AddExpense = () => {
  const expenseContext = useContext(ExpenseContext);
  const { addExpense, mode } = expenseContext;

  const [expense, setExpense] = useState('');
  const [cost, setCost] = useState('');

  const handleExpense = (e) => setExpense(e.target.value);
  const handleCost = (e) => setCost(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.trim() === '' || !parseInt(cost)) {
      alert('Please enter an expense');
    } else {
      addExpense(expense, parseInt(cost));
      clearFields();
      alert('Added successfully');
    }
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
        {mode === 'add' && (
          <Button
            large
            node="a"
            style={{
              marginLeft: '1.3rem',
              fontSize: '1rem',
            }}
            className="blue darken-3"
            onClick={handleSubmit}
            waves="light"
          >
            Add Expense
            <Icon left>add</Icon>
          </Button>
        )}
        {mode === 'edit' && (
          <Button
            large
            node="a"
            style={{
              marginLeft: '1.3rem',
              fontSize: '1rem',
            }}
            className="orange darken-2"
            waves="light"
          >
            Update Expense
            <Icon left>mode_edit</Icon>
          </Button>
        )}
      </Row>
    </CardPanel>
  );
};

export default AddExpense;
