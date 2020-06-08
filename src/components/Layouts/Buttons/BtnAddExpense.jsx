import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-materialize';

const BtnAddExpense = ({ onClick }) => {
  return (
    <Button
      large
      node="a"
      style={{
        marginLeft: '1.3rem',
        fontSize: '1rem',
      }}
      className="white black-text"
      onClick={onClick}
      waves="light"
    >
      Add Expense
      <Icon left>add</Icon>
    </Button>
  );
};

BtnAddExpense.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BtnAddExpense;
