import React from 'react';
import {
  CardPanel,
  Row,
  Col,
  Button,
  TextInput,
  Icon,
} from 'react-materialize';

const AddExpense = () => {
  return (
    <CardPanel className="deep-purple white-text">
      <h4>Add A New Expense</h4>
      <Row>
        <Col s={8} m={8} l={8}>
          <TextInput id="TextInput-4" label="Expense" s={12} m={12} l={12} />
        </Col>
        <Col s={4} m={4} l={4}>
          <TextInput id="TextInput-4" label="Cost" s={12} m={12} l={12} />
        </Col>
      </Row>
      <Row>
        <Button
          medium
          node="a"
          style={{
            marginLeft: '1.3rem',
            fontSize: '1rem',
          }}
          className="blue darken-3"
          waves="light"
        >
          Add Expense
          <Icon left>add</Icon>
        </Button>
        <Button
          medium
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
      </Row>
    </CardPanel>
  );
};

export default AddExpense;
