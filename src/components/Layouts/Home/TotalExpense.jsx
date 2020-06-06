import React from 'react';
import { CardPanel } from 'react-materialize';

const TotalExpense = () => {
  return (
    <CardPanel
      className="deep-orange darken-1 white-text"
      style={{ textAlign: 'center' }}
    >
      <h3>Total expense</h3>
      <h3>Rs. 1000</h3>
    </CardPanel>
  );
};

export default TotalExpense;
