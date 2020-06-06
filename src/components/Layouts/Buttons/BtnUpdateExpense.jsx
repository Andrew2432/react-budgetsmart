import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-materialize';

const BtnUpdateExpense = ({ onClick }) => {
  return (
    <Button
      large
      node="a"
      style={{
        marginLeft: '1.3rem',
        fontSize: '1rem',
      }}
      className="orange darken-2"
      onClick={onClick}
      waves="light"
    >
      Update Expense
      <Icon left>mode_edit</Icon>
    </Button>
  );
};

BtnUpdateExpense.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BtnUpdateExpense;
