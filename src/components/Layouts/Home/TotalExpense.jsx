import React from 'react';
import { CardPanel } from 'react-materialize';

const TotalExpense = () => {
  return (
    <CardPanel
      className="deep-orange darken-1 white-text"
      style={{ textAlign: 'center' }}
    >
      <h4>Total expense</h4>
      <h4>Rs. 1000</h4>
    </CardPanel>
  );
};

export default TotalExpense;
